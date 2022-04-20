import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'

import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicos" element={<Servicos />} />
          <Route exact path="/contatos" element={<Contato />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
