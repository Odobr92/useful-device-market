import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from '..';
import { publicRoutes, authRoutes } from '../router/index';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import styles from './styles/AppRouter.module.scss'

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Container className={styles.container}>
      <Routes>
        {user.isAuth &&
          authRoutes.map((page) => (
            <Route path={page.path} element={page.element} key={page.path} />
          ))}
        {publicRoutes.map((page) => (
          <Route path={page.path} element={page.element} key={page.path} />
        ))}
        <Route
          path="*"
          element={
            user.isAuth ? (
              <Navigate replace to={MAIN_ROUTE} />
            ) : (
              <Navigate replace to={LOGIN_ROUTE} />
            )
          }
        />
      </Routes>
    </Container>
  );
});

export default AppRouter;
