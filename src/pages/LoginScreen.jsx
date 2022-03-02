import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext); //Destructuramos la función dispatch del context.

  const navigate = useNavigate(); //Crea la variable navigate

  const handleLogin = () => {
    // Cuando se presione el botón login
    dispatch({ type: authTypes.login }); //Se cambia el estado de la variable log del context a true
    navigate("/men"); //Carga la ruta (localhost:3000/men)
  };

  return (
    <div className='container mt-5 text-center'>
      <img src='/assets/animate.gif' alt='Gif' />
      <h1 className='my-3'>Login Screen</h1>
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
