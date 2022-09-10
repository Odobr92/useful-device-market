import React, { useContext, useEffect, useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
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

  /*const componentWillMount = () => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/5584d82c9f.js';
    script.crossorigin = 'anonymous';
    document.body.appendChild(script);
  };*/

  useEffect(() => {
    /*componentWillMount();*/
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
      <div className='text_info'>Данный сайт предназначен для ознакомления! Цены товара - это фантазия разработчика, как и его наличие!</div>
      <NavFooter />
      <hr/>
    </BrowserRouter>
  );
};

export default App;
