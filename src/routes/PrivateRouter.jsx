import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { log } = useContext(AuthContext); //Destructuramos la variable log del context.

  /* Pregunta si hemos iniciado sesión. En caso de que lo hayamos hecho entonces
    carga el componente children el cual es <AppRouter/>. En caso de no hayamos 
    iniciado sesión nos redirigira a "/login" */
  return log.log ? children : <Navigate to='/login' />;
};

export default PrivateRouter;
