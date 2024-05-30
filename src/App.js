// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='menu' element={<MenuPage/>} ></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <Menu /> */}
    </div>
  );
}

export default App;
