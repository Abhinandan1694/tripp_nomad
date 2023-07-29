import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About"
import Service from "./Routes/Service"
import Contact from "./Routes/Contact"
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Navbar />
    </div>
  );
}
