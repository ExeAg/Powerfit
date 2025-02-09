import '@testing-library/jest-dom'; // Extiende las funcionalidades de Jest con métodos de aserción adicionales para pruebas en el DOM.
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // 'render' se usa para renderizar el componente en un contenedor de prueba, y 'screen' se usa para consultar el DOM renderizado.
import { BrowserRouter as Router } from 'react-router-dom'; // Para envolver el componente en un Router.
import Taskcard from '../src/components/Taskcard'; // Importa el componente 'Taskcard' que se va a probar.

const mockDeleteTask = jest.fn();

jest.mock('../src/context/TasksContext', () => ({
  useTasks: () => ({
    deleteTask: mockDeleteTask,
  }),
}));

describe('Taskcard component', () => {
  test('la descripción, el título y la fecha se encuentran', () => {
    const task = { title: 'Test Task', _id: 'Test Id', description: 'Test Description', date: '2024-07-27T00:00:00Z' };
    render(
      <Router>
        <Taskcard task={task} />
      </Router>
    );

    const titleElement = screen.getByText('Test Task');
    const descriptionElement = screen.getByText('Test Description');
    const dateElement = screen.getByText('27/07/2024');
    const deleteButton = screen.getByText('borrar');
    const editButton = screen.getByText('editar');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();

  });

  test('el botón borrar llama a deleteTask', () => {
    const task = { title: 'Test Task', _id: 'Test Id', description: 'Test Description', date: '2024-07-27T00:00:00Z' };
    render(
      <Router>
        <Taskcard task={task} />
      </Router>
    );

    const deleteButton = screen.getByText('borrar');
    fireEvent.click(deleteButton); // Simula un clic en el botón "borrar".

    expect(mockDeleteTask).toHaveBeenCalledWith(task._id); // Verifica que mockDeleteTask haya sido llamado con el _id de la tarea.

  });
});
