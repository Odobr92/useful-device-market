import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from '..';
import { publicRoutes, authRoutes } from '../router/index';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
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
  );
};

export default AppRouter;
