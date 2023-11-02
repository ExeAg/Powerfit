import React from 'react';
import { render } from '@testing-library/react';
import UserList from '../UserList';  

describe('UserList', () => {
  it('renders the component', () => {
    const users = [
      
      {
        id: 1,
        username: 'user1',
        fullname: 'User One',
        email: 'user1@example.com',
        dni: '12345',
        age: 25,
        date: '2023-10-01',
        role: 'Alumno',
      },
      
    ];

    const { getByText } = render(<UserList users={users} />);

    
    expect(getByText('Alumnos')).toBeInTheDocument();
    expect(getByText('Nombre de Usuario')).toBeInTheDocument();
    expect(getByText('Nombre completo')).toBeInTheDocument();
    expect(getByText('Correo Electrónico')).toBeInTheDocument();
   
  });
});

export default describe