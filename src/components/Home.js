import React from 'react';
import NavBar from './NavBar';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { globalProvider } from './context/Context';
import { useParams, useSearchParams } from 'react-router-dom'
const Home = () => {
  console.log(useSearchParams())
  const navigate = useNavigate();
  const { tokenAuth } = useContext(globalProvider);
  const token = tokenAuth
  useEffect(() => {

    if (token === 'undefined')
      navigate('/login')
  }, [token, useParams()])

  return (
    <div>
      <NavBar />
      <Layout />
    </div>
  );

};


export default Home;
