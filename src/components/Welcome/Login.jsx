import React, { useState } from "react";
const axios = require('axios');

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password
      })
      localStorage.setItem('userToken', response.data.refreshToken);
    } catch (err) {
      console.log (err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>

      <br />
      <br />
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
