// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <Menu /> */}
    </div>
  );
}

export default App;
