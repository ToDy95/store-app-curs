import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/search' element={<Search />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App;
