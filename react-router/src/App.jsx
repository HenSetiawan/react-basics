/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <h1>Jobarouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
