// import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import ShowMedia from './components/ShowMedia/ShowMedia'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="showmedia" element={<ShowMedia />} />
      </Routes>
      
    </div>
  );
}

export default App;
