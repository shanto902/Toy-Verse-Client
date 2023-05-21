import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/AuthComponent/Login/Login";
import Register from "../pages/AuthComponent/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path : '/',
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/my-toys',
          element: <PrivateRoutes><MyToys/></PrivateRoutes>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />,
    },

  ]);

  export default router;