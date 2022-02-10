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
    <div>
      <form onSubmit={handleSubmit}>

      <label>Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          name="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />

        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter email..."
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <label>Password:</label>
        <input 
          type="password"
          placeholder="Enter password..."
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <label>Confirm Password:</label>
        <input 
          type="password"
          placeholder="Enter password..."
          name="password confirmation"
          value={passwordConfirmation}
          onChange={(e) => {setPasswordConfirmation(e.target.value)}}
        />
        <input type="submit" value="Register" />
      </form>

      <br />
      <br />
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Password: {passwordConfirmation}</p>
    </div>
  )
}
