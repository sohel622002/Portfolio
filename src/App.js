import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./Pages/Projects/Projects";
import AddProject from "./Pages/AddProjects/AddProject";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
