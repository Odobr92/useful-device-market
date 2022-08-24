import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  const { user } = useContext(Context);
  console.log(user.isAuth)
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
