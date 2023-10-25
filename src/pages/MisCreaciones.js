import React from 'react';
import { useState, useEffect } from 'react';
import Proyect from '../components/Proyect';
import { proyectos } from '../api/proyectos'

const MisCreaciones = () => {
    const [creaciones, setCreaciones] = useState([]);
    useEffect(() => {
        setCreaciones(proyectos)
    })
    return (
        <div>
            <h1>Página de creaciones</h1>
            {creaciones?.map(creacion => (
            <Proyect proyecto={creacion} key={creacion.id}/>
            ))}
        </div>
    );
}
export default MisCreaciones