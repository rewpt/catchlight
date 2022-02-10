import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import ShowMedia from './components/ShowMedia/ShowMedia';
import Home from './components/Home/Home'


import App from "./App";




ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="welcome" element={<Welcome />} />
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="showmedia" element={<ShowMedia />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

