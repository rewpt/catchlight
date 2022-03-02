import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [registerError, setRegisterError] = useState(false);

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
      ) {
        setRegisterError(true);
        return console.log("error");
      }
      await axios.post("/api/users/register", {
        email,
        password,
        name,
      });
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("userToken", response.data.jwtToken);
      navigate("/", { replace: true });
    } catch (err) {
      setRegisterError(true);
      console.log(err);
    }
  };

  return (
    <main className="flex h-screen pagebg bg-cover bg-center w-screen">
      <div className="container bg-searchmain my-auto max-w-3xl m-8 p-8 mx-auto z-15 drop-shadow-2xl border border-black rounded-2xl">
        <div className="flex justify-center">
          <FontAwesomeIcon
            className="text-5xl text-pagetxt"
            icon={faUserPlus}
          />
        </div>
        <div className="p-8 m-8">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-2xl text-pagetxt mb-3">Name:</label>
            <input
              className="h-14 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-inputbg text-inputtext"
              type="text"
              placeholder="Enter name..."
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label className="text-2xl text-pagetxt my-3">Email:</label>
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

            <label className="text-2xl text-pagetxt my-3">
              Confirm Password:
            </label>
            <input
              className="h-14 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-inputbg text-inputtext"
              type="password"
              placeholder="Enter password..."
              name="password confirmation"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
            />
            {registerError && (
              <div className="text-red-500">
                Registration Failed. Please Try Again.
              </div>
            )}
            <button
              className="border border-black p-2 my-2 bg-pagetxt text-3xl rounded-l hover:bg-amber-500 mt-6"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="flex flex-row-reverse">
            <Link
              to="/login"
              className="flex flex-row-reverse p-2 py-2 text-pagetxt "
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
