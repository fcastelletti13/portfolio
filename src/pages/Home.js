import React from 'react';
import { proyectos } from '../api/proyectos'
import { useState, useEffect } from 'react';
import Proyect from '../components/Proyect';

function Home() {
    const [destacados, setDestacados] = useState([]);
    useEffect(() => {
        setDestacados(proyectos)
    })
    return (
        <div>
            <h1>Página Principal</h1>
            <h2>Destacados</h2>
            {destacados?.map(creacion => (
            <Proyect proyecto={creacion} key={creacion.id}/>
            ))}
        </div>
    );
}

export default Home;