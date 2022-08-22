import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes, authRoutes } from '../router/index';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = true;
    return (
    <Routes>
        {isAuth && authRoutes.map((page => 
          <Route path={page.path} element={page.element} key = {page.path}/>))
        }
        {
          publicRoutes.map((page => <Route path={page.path} element={page.element} key = {page.path}/>))        
        }
        <Route
          path="*"
          element={
            isAuth ? (
              <Navigate replace to={MAIN_ROUTE} />
            ) : (
              <Navigate replace to={LOGIN_ROUTE} />
            )
          }
        />
    </Routes>
    );
}

export default AppRouter;