import React from "react";
import { Input, Form } from "antd";
export const Login = () => {
  return (
    <>
      <div>
        <label htmlFor="username" >Username:</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password" >Password:</label>
        <input id="password" />
      </div>
    </>
  );
};
