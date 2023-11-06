import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import UserProvider from './context/UserContext';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Informacion from "./pages/Informacion";
import MisCreaciones from "./pages/MisCreaciones";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/informacion" element={<Informacion/>}></Route>
            <Route path="/creaciones" element={<MisCreaciones/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
      
    </div>
  );
}

export default App;
