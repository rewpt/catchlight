// import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import ShowMovie from './components/ShowMovie'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="showmovie" element={<ShowMovie />} />
      </Routes>
      
    </div>
  );
}

export default App;
