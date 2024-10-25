import reactLogo from "./assets/react.svg";
import Card from "./Card";
import "./App.css";

import { useState, useEffect } from "react";



function App() {
  
  let [logueado, setLogueado] = useState(false); // Retornar [valor, fn]

  let mensaje = logueado == true ? "Bienvenido" : "Iniciar sesion";

  let nombre = "José";
  const products = [
    { id: 1, nombre: "Mate", precio: 500 },
    { id: 1, nombre: "Glletitas", precio: 100 },
    { id: 1, nombre: "Zapatilla", precio: 2500 },
  ];
  let titulo = <h2> Esto es un título</h2>;
  const login = () => {
    //alert('¿Hey que haces click?');
    console.log('Se inicio la fn login')
    setLogueado(true);
  }

  const logout = () => {
    setLogueado(false);
  }

console.log(login);
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      {/* Se puede pasar como objeto o con doble {{}} */}
      {titulo}
      <h4> {mensaje} </h4>

      <hr />
      <button className="boton" onClick={ login } type="button"> Login </button>
      <button className="boton" onClick={ logout } type="button"> Logout </button>

      {/* Solo se puede retornar con div o <> </> v*/}
      {logueado == true ? (
        <div className="row">
        {
          products.map(producto => (
            <Card
              key={producto.id}
              texto={producto.nombre}
              precio={producto.precio}
            />
          ))
        }
      </div>
      ) : (
        <h4>
          {" "}
          Iniciar Sesion <a href="#">Login</a>{" "}
        </h4>
      )}

      <p className="verde"> Hola {nombre}</p>
    </div>
  );
}

export default App;
