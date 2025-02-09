import '@testing-library/jest-dom'; //Extiende las funcionalidades de Jest con métodos de aserción adicionales para pruebas en el DOM.
import React from 'react';
import { render, screen } from '@testing-library/react'; //'render' se usa para renderizar el componente en un contenedor de prueba, y 'screen' se usa para consultar el DOM renderizado.
import TaskcardDos from '../src/components/TaskcardDos'; //Importa el componente 'TaskcardDos' que se va a probar.

describe('TaskcardDos component', () => { //'describe': Agrupa las pruebas relacionadas bajo un mismo nombre, en este caso, "TaskcardDos component".
  test('la descripción se encuentra', () => { //'test': Define una prueba individual. La prueba se titula "la descripción se encuentra".
    const task = { title: 'Test Task', description: 'Test Description', date: '2024-07-27T00:00:00Z' }; // 'const task': Define un objeto 'task' con 'title', 'description', y 'date' que se pasará como prop al componente TaskcardDos.
    render(<TaskcardDos task={task} />); //Renderiza el componente 'TaskcardDos' con el objeto 'task' como prop.
    
    const descriptionElement = screen.getByText('Test Description'); //Usa 'screen.getByText' para buscar un elemento en el DOM renderizado que contenga el texto "Test Description".
    const titleElement = screen.getByText('Test Task');
    const dateElement = screen.getByText('27/07/2024');
    
    expect(descriptionElement).toBeInTheDocument(); //Verifica que el 'descriptionElement' esté presente en el documento.
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});

/*
En resumen, esta prueba asegura que cuando el componente TaskcardDos recibe una tarea con la descripción 
"Test Description", esa descripción aparece en el DOM.
*/
