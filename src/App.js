// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';
import ContactPage from './Pages/ContactPage';
import RecipeDetailsPage from './Pages/RecipeDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='menu' element={<MenuPage />} ></Route>
          <Route path='contact' element={<ContactPage />}></Route>
          <Route path='pages' element={<RecipeDetailsPage/>} ></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <Menu /> */}
    </div>
  );
}

export default App;
