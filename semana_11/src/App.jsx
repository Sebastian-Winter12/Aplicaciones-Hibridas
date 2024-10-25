import reactLogo from "./assets/react.svg";
import Card from "./Card";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  let logueado = true;

  let mensaje = logueado == true ? "Bienvenido" : "Iniciar sesion";

  let nombre = "José";
  const products = [
    { id: 1, nombre: "Mate", precio: 500 },
    { id: 1, nombre: "Glletitas", precio: 100 },
    { id: 1, nombre: "Zapatilla", precio: 2500 },
  ];
  const cursos = ["HTML", "JS", "React"];
  let titulo = <h2> Esto es un título</h2>;

  const user = {
    name: "Juan",
    email: "juan@mail.com",
  };

  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      {/* Se puede pasar como objeto o con doble {{}} */}
      {titulo}
      <h4> {mensaje} </h4>

      <hr />

      <div className="row">
        {products.map((producto) => {
          return <Card texto={producto.nombre} precio={producto.precio} />;
        })}
      </div>

      {/* Solo se puede retornar con div o <> </> v*/}
      {logueado == true ? (
        <>
          <h4> Bienvenido {nombre} </h4>
          <div className="row">
            <Card texto="Termo" precio={40000} />
            <Card texto="Mate" precio={5000} />
          </div>
        </>
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
