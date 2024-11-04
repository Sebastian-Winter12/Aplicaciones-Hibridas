import { useState, useEffect } from "react";
import Card from "../Card";

const Home = () => {
  
  let [recargar, setRecargar] = useState(false);
  let [logueado, setLogueado] = useState(false); // Retornar [valor, fn]
  let [productos, setProductos] = useState( [] );

  useEffect( () =>{
    console.log('Se Renderizo el componente')
    const getProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    const products = data.products.map( product => {
      return { id: product.id, nombre: product.title, foto: product.thumbnail, precio: product.price }
    } );
    console.log(products);
    setProductos( products );
  }

  getProducts();
  }, [ recargar ] );

  const iniciarRecarga = () => {
    setRecargar( !recargar );
  }

  let mensaje = logueado == true ? "Bienvenido" : "Iniciar sesion";

  let nombre = "José";
  // const products = [
  //   { id: 1, nombre: "Mate", precio: 500 },
  //   { id: 2, nombre: "Glletitas", precio: 100 },
  //   { id: 3, nombre: "Zapatilla", precio: 2500 },
  // ];
  let titulo = <h2> Esto es un título</h2>;
  const login = () => {
    //alert('¿Hey que haces click?');
    console.log('Se inicio la fn login')
    setLogueado(true);
  }

  const logout = () => {
    setLogueado(false);
  }

    return ( 
        <>
            <h2> Home </h2>

        
        {/* Se puede pasar como objeto o con doble {{}} */}


      {titulo}
      <h4> {mensaje} </h4>

      <hr />
      <button className="boton" onClick={ login } type="button"> Login </button>
      <button className="boton" onClick={ logout } type="button"> Logout </button>

      <button onClick={  iniciarRecarga }>recargar</button>

      {/* Solo se puede retornar con div o <> </> v*/}
      {logueado == true ? (
        <div className="row">
        {
          productos.map(producto => (
            <Card
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              foto={producto.foto}
              
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


        </>

        
    )
}

export default Home;