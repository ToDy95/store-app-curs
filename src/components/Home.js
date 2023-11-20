import React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { globalProvider } from './context/Context';
const Home = () => {
  const navigate = useNavigate();
  const { appUser, tokenAuth } = useContext(globalProvider);
  const [, setUser] = appUser
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
