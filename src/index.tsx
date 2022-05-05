import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/CSS/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/home'
import { Usuarios } from './Pages/Usuarios/usuario'
import { Filmes }  from './Pages/Filmes/filmes';
import  { Genero } from './Pages/Genero/genero';



const Rota = () =>{

    return(
      <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Usuarios  />} path="/Usuarios" />
                <Route element={<Filmes  />} path="/Filmes" />
                <Route element={<Genero  />} path="/Genero" />
            </Routes>
        </BrowserRouter>
    );
    
  }
  
  ReactDOM.render(<Rota/> , document.getElementById('root'));
