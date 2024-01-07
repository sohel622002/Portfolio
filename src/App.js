import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
