import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/AuthComponent/Login/Login";
import Register from "../pages/AuthComponent/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";

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
        },
        {
          path: '/add-toy',
          element: <PrivateRoutes><AddToy/></PrivateRoutes>
        },
        {
          path: '/all-toys',
          element: <AllToys />,
          loader: () => fetch("https://toy-verse-server-eta.vercel.app/toys")
        },
        {
          path: '/toy/:id',
          element: <PrivateRoutes><ToyDetails /></PrivateRoutes>,
          loader: ({params}) => fetch (`https://toy-verse-server-eta.vercel.app/toy/${params.id}`)

        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />,
    },

  ]);

  export default router;