import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import '../styles/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite';

const NavBar = observer( () => {
  const {user} = useContext(Context);
  const logOut = () => {
    user.setIsAuth(false);
    user.setUser(false);
    localStorage.setItem('token', '');
  }
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink className="main_brand" to={MAIN_ROUTE}>
          YoU Market
        </NavLink>
        {user.isAuth ?
          <Nav className="mr-auto">
            <NavLink className="main_nav" to={ADMIN_ROUTE}>
              Админ панель
            </NavLink>
            <NavLink className="main_nav" to={BASKET_ROUTE}>
              Корзина
            </NavLink>
            <Button className='m-1' variant={'outline-primary'} onClick={logOut}>
              Выйти
            </Button>
          </Nav>
        : 
          <Nav className="mr-auto">
            <NavLink className="main_nav" to={LOGIN_ROUTE}>
              Авторизация
            </NavLink>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;
