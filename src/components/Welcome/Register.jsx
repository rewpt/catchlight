import React, { useState } from "react";
const axios = require('axios');

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordConfirmation) return console.log('passwords do not match');
      await axios.post('http://localhost:3001/api/users/register', {
        email,
        password,
        name
      });
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('userToken', response.data.refreshToken);
      console.log('User created successfully...');
    } catch (err) {
      console.log (err);
    }
  }

  return (
    <div className="border p-8 m-8">
      <form className="flex flex-col" onSubmit={handleSubmit}>

      <label className="text-2xl">Name:</label>
        <input className="border p-2 m-2 text-xl"
          type="text"
          placeholder="Enter name..."
          name="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />

        <label className="text-2xl">Email:</label>
        <input className="border p-2 m-2 text-xl"
          type="text"
          placeholder="Enter email..."
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <label className="text-2xl">Password:</label>
        <input className="border p-2 m-2 text-xl"
          type="password"
          placeholder="Enter password..."
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <label className="text-2xl">Confirm Password:</label>
        <input className="border p-2 m-2 text-xl"
          type="password"
          placeholder="Enter password..."
          name="password confirmation"
          value={passwordConfirmation}
          onChange={(e) => {setPasswordConfirmation(e.target.value)}}
        />
        <input 
          className="border p-2 m-2 bg-sky-500 text-3xl hover:bg-blue-500" 
          type="submit" 
          value="Register" 
        />
      </form>
    </div>
  )
}
