import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 28 },
    { id: 3, name: 'Doe', age: 30 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}

export default UserList;
