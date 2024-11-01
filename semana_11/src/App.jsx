import reactLogo from "./assets/react.svg";
import Card from "./Card";
import "./App.css";
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './views/Home';
import Contact from './views/Contact';
import Details from './views/Details';
import Login from './views/Login';
import NotFound from "./views/NotFound";
import { useState, useEffect } from "react";



function App() {
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink to='/'> Inicio </NavLink>
          </li>
          <li>
            <NavLink to='/contact'> Contacto </NavLink>
          </li>
          <li>
            <NavLink to='/details'> Detalles </NavLink>
          </li>
          <li>
            <NavLink to='/login'> Login </NavLink>
          </li>
        </ul>
      </nav>
      {/* El área donde se van a mostrar los componentes (Vistas) */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/details/:id" element={ <Details /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
