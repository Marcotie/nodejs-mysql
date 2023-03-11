import React,{useState} from 'react';
import { Navigate } from 'react-router';


export const PrivateRoute = ({children})=>{
  const [jwt, setJwt] = useState();
  return jwt ? children :   <Navigate to="login"/>
}