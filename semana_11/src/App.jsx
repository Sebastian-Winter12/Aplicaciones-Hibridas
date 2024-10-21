import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import User from './User'
import './App.css'


//  fetch para unir el backend y el frontend utilizando async await
// Hay un error de permitsos (seguramente) qeu se resuelve en el index.js del backend, se agrega una linea de codigo que acepta permisos externos. app.use ( cors()) -> hay que usar npm install cors. Ademas hay que requerirlo con el const require.
// async function getUser () {
//   const endPoint = 'edpoinrt';
//   const user = await fetch (endPoint);
//   const users = await reps.json ();
  
//   console.log(users);
// }

function App() {
  let nombre = "José";
  let edad = 21;
  const cursos = ['HTML', 'JS', 'React'];
  let titulo = <h2> Esto es un título</h2>;

  const user = {
    name: 'Juan',
    email: 'juan@mail.com'
  }
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      {/* Se puede pasar como objeto o con doble {{}} */}
      <User data={ user.name }/>
      <img src="" alt="" /> 
      { titulo}
      <Card texto="Termo" precio={40000} />
      <Card texto="Mate" precio={5000} />

      <p className='verde'> Hola { nombre }</p>
      <p> {  edad + 2  }</p>
      <p> {  cursos[2]  } </p>
    </div>
  )
}

export default App
