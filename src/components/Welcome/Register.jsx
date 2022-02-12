import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const axios = require('axios');

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');

  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        password !== passwordConfirmation ||
        passwordConfirmation.length <= 0 ||
        password.length <= 0 || 
        email.length <= 0 || 
        name.length <= 0
        ) return console.log('error');
      await axios.post('http://localhost:3001/api/users/register', {
        email,
        password,
        name
      });
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('userToken', response.data.accessToken);
      navigate("/", { replace: true });
    } catch (err) {
      console.log (err);
    }
  }

  return (
    <main className="flex h-screen">
    <div className="container my-auto max-w-3xl m-8 p-8 mx-auto z-15 bg-white drop-shadow-2xl border rounded-2xl">
    <div className="flex justify-center">
      <FontAwesomeIcon className="text-5xl" icon={faUserPlus}/>
    </div>
    <div className="p-8 m-8">
      <form className="flex flex-col" onSubmit={handleSubmit}>

      <label className="text-2xl">Name:</label>
        <input className="border p-2 my-2 text-xl rounded-xl"
          type="text"
          placeholder="Enter name..."
          name="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />

        <label className="text-2xl">Email:</label>
        <input className="border p-2 my-2 text-xl rounded-xl"
          type="text"
          placeholder="Enter email..."
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <label className="text-2xl">Password:</label>
        <input className="border p-2 my-2 text-xl rounded-xl"
          type="password"
          placeholder="Enter password..."
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <label className="text-2xl">Confirm Password:</label>
        <input className="border p-2 my-2 text-xl rounded-xl"
          type="password"
          placeholder="Enter password..."
          name="password confirmation"
          value={passwordConfirmation}
          onChange={(e) => {setPasswordConfirmation(e.target.value)}}
        />
        <button 
          className="border p-2 my-2 bg-sky-500 text-3xl rounded-xl hover:bg-sky-600"
          onClick={() => {
            handleSubmit();
          }}
        >Register
        </button>
      </form>
      <div className="flex flex-row-reverse">
        <Link to="/login" className="flex flex-row-reverse p-2 py-2 text-blue-500 ">Back to login</Link>
      </div>
    </div>
    </div>
    </main>
  )
}
