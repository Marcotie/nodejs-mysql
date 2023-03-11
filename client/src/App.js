import './App.css';
import {Products} from './pages/products';
import {Users} from './pages/users';
import {Error} from './pages/error';
import {Root} from './pages/root';
import {Login} from './pages/login';
import {PrivateRoute} from './pages/privateRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Root/></PrivateRoute>,
    ellorElement:<Error/>,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  }
]);