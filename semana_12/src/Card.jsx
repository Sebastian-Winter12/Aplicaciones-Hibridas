import React from "react";
import './App.css'
import { Link } from "react-router-dom";


function Card ( props){
    //const precio = props.precio;
    console.log(props);
    return (
        <div className="card">
            <h4> { props.nombre} </h4>
            <hr />
            <img src={props.foto} alt={props.nombre} />
            <p> $ { props.precio + 10}</p>
            <Link to={`/details/${props.id}`}> Detalle </Link>
        </div>
    )
}

export default Card;