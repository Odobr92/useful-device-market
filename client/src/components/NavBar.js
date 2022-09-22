import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {observer} from 'mobx-react-lite';
import styles from './styles/NavBar.module.scss'
import CastomButton from './UI/button/CastomButton';

const NavBar = observer( () => {
  const {user} = useContext(Context);
  const [themeMode, setThemeMode] = useState('L');
  const logOut = () => {
    user.setIsAuth(false);
    user.setUser(false);
    localStorage.setItem('token', '');
  }

  useEffect(() => {
    document.documentElement.removeAttribute("theme");
    if(localStorage.getItem('theme') == 'D')
      document.documentElement.setAttribute("theme", "dark");
      setThemeMode(localStorage.getItem('theme'));
  }, [])

  const NewTheme = () => {
    if(document.documentElement.hasAttribute("theme")){
      document.documentElement.removeAttribute("theme");
      setThemeMode('L');
      localStorage.setItem('theme', 'L');
    }
    else{
      document.documentElement.setAttribute("theme", "dark");
      setThemeMode('D');
      localStorage.setItem('theme', 'D');
    }
    
  }

  return (
    <Navbar className={styles.nav}>
      <Container>
        <NavLink className={styles.mainLogo} to={MAIN_ROUTE}>
          YoU Market
        </NavLink>
        <CastomButton className={styles.button} onClick={NewTheme}>{themeMode}</CastomButton>
        {user.isAuth ?
          <Nav className="mr-auto">
            <NavLink className={styles.navMenuItem} to={ADMIN_ROUTE}>
              Админ панель
            </NavLink>
            <NavLink className={styles.navMenuItem} to={BASKET_ROUTE}>
              Корзина
            </NavLink>
            <CastomButton className={styles.button} onClick={logOut}>
              Выйти
            </CastomButton>
          </Nav>
        : 
          <Nav className="mr-auto">
            <NavLink className={styles.navMenuItem} to={LOGIN_ROUTE}>
              Авторизация
            </NavLink>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;
