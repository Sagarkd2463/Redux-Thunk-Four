import React from 'react';

function User({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <table border={'1'} cellPadding={'2'}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        {
          users.map(user => {
            return (
              <tbody>
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}

export default User;