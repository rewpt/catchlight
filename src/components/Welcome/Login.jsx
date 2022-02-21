import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password.length <= 0 || email.length <= 0)
        return console.log("error");
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("userToken", response.data.jwtToken);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex h-screen bg-pagebackground">
      <div className="container my-auto max-w-3xl m-8 py-8 mx-auto z-15 bg-searchmain drop-shadow-2xl border border-black rounded-2xl">
        <div className="flex justify-center">
          <FontAwesomeIcon className="text-5xl text-pagetxt" icon={faLock} />
        </div>
        <div className="p-8 m-8">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-2xl text-pagetxt mb-3">Email:</label>
            <input
              className="h-14 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-inputbg text-inputtext"
              type="text"
              placeholder="Enter email..."
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="text-2xl text-pagetxt my-3">Password:</label>
            <input
              className="h-14 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-inputbg text-inputtext"
              type="password"
              placeholder="Enter password..."
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="border border-black p-2 my-2 bg-pagetxt text-3xl rounded-l hover:bg-amber-500 mt-6"
            >
              Login
            </button>
          </form>
          <div className="flex flex-row-reverse">
            <Link to="/register" className="p-2 py-2 text-pagetxt">
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
