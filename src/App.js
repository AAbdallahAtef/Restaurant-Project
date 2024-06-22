// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import BookATaple from './Pages/BookATable';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='menu' element={<MenuPage />} ></Route>
            <Route path='bookATable' element={<BookATaple />} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <Menu /> */}
      </Provider>

    </>
  );
}

export default App;
