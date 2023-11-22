import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import usuario from '../assets/usuario.png'

const Layout = () => {
    return (
        <>
            <nav>
                <div className="container-fluid">
                    <div class = "nav-list">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/informacion">Informacion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/creaciones">MisCreaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favoritos">Favoritos</Link>
                            </li>
                        </ul>
                        <div className='user-btn-container'>
                            <button className='user-btn'>
                                <img src={usuario} alt='user' id='userPng'></img>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer/>
        </>
    )
}
export default Layout