import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const PublicRouter = ({ children }) => {
  const { log } = useContext(AuthContext); //Destructuramos la variable log del context.
  /* Pregunta si hemos iniciado sesión. En caso de que lo hayamos hecho entonces
    nos redirije a "/". En caso de no hayamos iniciado sesión carga el componente 
    children el cual es el <LoginScreen/> */
  return log.log ? <Navigate to='/' /> : children;
};

export default PublicRouter;
