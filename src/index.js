import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Welcome/Login";
import Register from "./components/Welcome/Register";
import ShowMedia from './components/ShowMedia/ShowMedia';
import Home from './components/Home/Home'


import App from "./App";




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="showmedia" element={<ShowMedia />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

