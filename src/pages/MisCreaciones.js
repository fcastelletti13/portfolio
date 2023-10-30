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
            <h2>Página de creaciones</h2>
            {creaciones?.map(creacion => (
            <Proyect proyecto={creacion} key={creacion.id}/>
            ))}
        </div>
    );
}
export default MisCreaciones