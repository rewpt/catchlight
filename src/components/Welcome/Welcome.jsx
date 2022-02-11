import React from 'react';
import Login from './Login';
import Register from './Register';

export default function Welcome() {

  return (
    <main className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 bg-white bg-scroll z-0">
      <div className="container m-8 p-8 mx-auto z-15 bg-white drop-shadow-2xl border rounded-2xl border-white">
        <Login />
        <Register />
      </div>
    </main>
  )
}