import React, { useEffect, useState } from "react";
const axios = require('axios');

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form action="http://localhost:3001/api/auth/login" method="POST">
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
        <button type="submit">Login</button>
      </form>

      <br />
      <br />
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}
