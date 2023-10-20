import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
