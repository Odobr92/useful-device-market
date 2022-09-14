import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import NavFooter from './components/NavFooter';
import { check } from './http/userAPI';
import './styles/App.css'

const App = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <div className='text_info'>Данный сайт предназначен только для ознакомления! Цены товара и наличие - это фантазия разработчика!</div>
      <NavFooter />
      <hr/>
    </BrowserRouter>
  );
};

export default App;
