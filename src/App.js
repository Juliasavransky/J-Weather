import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './Styles/main.css';

import Home from './components/Home';
import Favorites from './components/Favorites';
import { useSelector } from 'react-redux';


// const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
// const BASE_URL = process.env.REACT_APP_BASE_URL;
//cityKey="215854"  tel-aviv

const App = () => {
  const length = useSelector(state => state.favorites.items.length);


  return (
    <div className="App">

      <nav className='navbar__container'>
        <div className="navbar__container--item"> My Logo</div>
        <Link className="navbar__container--item" to="/">Home </Link>
        <Link className="navbar__container--item" to="/favorites">Favorites {length}</Link>

      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/redirect/:id" element={<Navigate to="/*" />} /> */}

      </Routes>

    </div >
  );
}

export default App;


