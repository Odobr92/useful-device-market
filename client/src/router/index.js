import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Main from "../pages/Main";
import {REGISTRATION_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, MAIN_ROUTE } from "../utils/consts";


export const authRoutes = [
    {path: ADMIN_ROUTE, element: <Admin/>, exact: true},
    {path: BASKET_ROUTE, element: <Basket/>, exact: true}
]

export const publicRoutes = [
    {path: LOGIN_ROUTE, element: <Auth/>, exact: true},
    {path: REGISTRATION_ROUTE, element: <Auth/>, exact: true},
    {path: MAIN_ROUTE, element: <Main/>, exact: true},
    {path: DEVICE_ROUTE + '/:id', element: <DevicePage/>, exact: true}
]
