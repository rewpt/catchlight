import React from 'react'
import { useState, useEffect } from 'react'
import getUser from '../../hooks/getUser';
import Modal from '../UserProfile/Modal';


export default function GetUserTest() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <div>
      <p>{user.id} {user.name} {user.email}</p>
    </div>
  )
}
