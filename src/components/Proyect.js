import React from "react";

const Proyect = ({proyecto}) => {
    return(
        <div>
            <img src={proyecto.principal} alt={proyecto.titulo}></img>
            <div>
                <h2>{proyecto.titulo}</h2>
                <p>{proyecto.descripcion}</p>
                <p>{proyecto.fecha} | <a href={proyecto.url}>{proyecto.url}</a></p>
            </div>
        </div>
    )
}

export default Proyect