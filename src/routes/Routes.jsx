import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ErrorPages from "../pages/errorPages/ErrorPages";
import Menu from "../pages/menu/Menu";
import OurShop from "../pages/shop/OurShop";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/ourMenu",
          element:<Menu></Menu>
        },
        {
          path:"/ourShop/:category",
          element:<OurShop></OurShop>
        }
      ]
    },
  ]);