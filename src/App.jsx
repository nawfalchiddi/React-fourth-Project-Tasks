import { useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import Hero from "./pages/Home/components/Hero";
import Foter from "./layouts/Foter";
import Home from "./pages/Home/Home";
// import About from "./pages/About/components/About";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Foter />
    </>
  );
}

export default App;
