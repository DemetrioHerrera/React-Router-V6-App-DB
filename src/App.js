import { useEffect, useReducer } from "react";

import LoginRouter from "./routes/LoginRouter";

import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

const init = () => {
  /*   Se crea una función de inicialización del Reducer, 
      si existe en el LocalStorage la variable para iniciar
      sesion lo carga como valor inicial , en caso contrario
      lo establece como false*/
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init); // Se establece el state y dispatch del reducer

  //Se crea un Use Efect para setear la variable log (para el inicio de sesión) en el localStorage
  //cada vez que esta cambia
  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);
  /* Se crea un context */
  return (
    <AuthContext.Provider
      value={{
        log,
        dispatch,
      }} /*Se crea un contexto en el cual le enviamos las variables de nuestro reducer 
      para que estén disponibles en toda nuestra aplicación */
    >
      <LoginRouter />
      {/* Se carga el router del LogIn */}
    </AuthContext.Provider>
  );
};

export default App;
