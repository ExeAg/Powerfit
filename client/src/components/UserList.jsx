import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es';
dayjs.extend(utc);

const UserList = ({ users }) => {
  const today = dayjs();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 pb-4 text-center">Alumnos</h2>
      <table className="border-collapse w-full text-black text-center">
        <thead>
          <tr>
            <th className="p-3 bg-green-700 text-white">Nombre de Usuario</th>
            <th className="p-3 bg-green-700 text-white">Nombre completo</th>
            <th className="p-3 bg-green-700 text-white">Correo Electrónico</th>
            <th className="p-3 bg-green-700 text-white">DNI</th>
            <th className="p-3 bg-green-700 text-white">Edad</th>
            <th className="p-3 bg-green-700 text-white">Fecha de inscripción</th>
            <th className="p-3 bg-green-700 text-white">Vencimiento de cuota</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((user) => user.role === "Alumno").map((user, index) => {
            const registrationDate = dayjs(user.date);
            const dueDate = registrationDate.add(30, 'day');
            const isDue = today.isAfter(dueDate);

            return (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.fullname}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.dni}</td>
                <td className="p-3">{user.age}</td>
                <td className="p-3">{registrationDate.utc().format('YYYY-MM-DD')}</td>
                <td className={`p-3 ${isDue ? 'text-red-600' : 'text-green-600'}`}>
                  {dueDate.utc().format('YYYY-MM-DD')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
