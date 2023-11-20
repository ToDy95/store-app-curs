import React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { globalProvider } from './context/Context';
const Home = () => {
  const navigate = useNavigate();
  const { tokenAuth } = useContext(globalProvider);
  const token = tokenAuth
  useEffect(() => {

    if (token === 'undefined')
      navigate('/login')
  }, [token])

  return (
    <div>
      <NavBar />
      <Layout />
    </div>
  );

};


export default Home;
