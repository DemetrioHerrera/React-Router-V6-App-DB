import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRouter from "./AppRouter";
import LoginScreen from "../pages/LoginScreen";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Primero seteamos las rutas publicas y luego las privadas
            Enviando la ruta raíz de cada juego de rutas  */}
        <Route
          path='/Login'
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />
        <Route
          path='*'
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
