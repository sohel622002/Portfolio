import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      {/* <div className="mobile-nav-links">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
