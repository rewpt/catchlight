import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Welcome/Login";
import Register from "./components/Welcome/Register";
import Home from './components/Home/Home'
import Test from "./components/TestPage/Test";


import App from "./App";
import MediaDetails from "./components/ShowMedia/MediaDetails";

const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3001';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<Test />} />

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="media/:id" element={<MediaDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

