import React from 'react'
import { useState, useEffect } from 'react'
import getUsers from '../../hooks/getUsers';


export default function Test() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <h1>{user.id}, {user.name}, {user.email}</h1>
      })}
    </div>
  )
}
