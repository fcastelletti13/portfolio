import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';

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
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer/>
        </>
    )
}
export default Layout