import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Welcome/Login";
import Register from "./components/Welcome/Register";
import Home from './components/Home/Home'
import MediaDetails from "./components/ShowMedia/MediaDetails";
import App from "./App";
import ProtectedRoutes from "./helpers/ProtectedRoutes";

const axios = require('axios');
axios.defaults.baseURL = 'https://catchlight-api.herokuapp.com/';

document.body.style = 'background: #121212;';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="media/:mediaID" element={<MediaDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  
  document.getElementById("root")
);

