import React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token_store_app');
  // useEffect(() => {
  //   if (token === 'undefined')
  //     navigate('/login')
  // }, [token])

  return (
    <div>
      <NavBar />
      <Layout />
    </div>
  );

};


export default Home;
