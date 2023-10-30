import React from "react";

const Proyect = ({proyecto}) => {
    return(
        <div className="proyect">
            <img className="img_ptoyect" src={proyecto.principal} alt={proyecto.titulo}></img>
            <div>
                <h2>{proyecto.titulo}</h2>
                <p>{proyecto.descripcion}</p>
                <p>{proyecto.fecha} | <a href={proyecto.url}>{proyecto.url}</a></p>
            </div>
            <span></span>
        </div>
    )
}

export default Proyect