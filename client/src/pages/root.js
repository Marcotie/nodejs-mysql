import { Button } from "antd";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./root.scss";

export const Root = () => (
  <div id="root">
    <div className="header">
      <NavLink
        to="users"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        User
      </NavLink>
      <NavLink
        to="products"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
      >
        Products
      </NavLink>
    </div>

    <hr />
    <Outlet />
  </div>
);
