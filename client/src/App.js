import './App.css';
import {Products} from './pages/products';
import {Users} from './pages/users';
import {Error} from './pages/error';
import {Root} from './pages/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
  }
]);