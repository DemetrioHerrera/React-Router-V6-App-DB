import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import LoadingScreen from "../pages/LoadingScreen";
// import CharacterScreen from "../pages/CharacterScreen";
// import MenScreen from "../pages/MenScreen";
// import SearchScreen from "../pages/SearchScreen";
// import WomenScreen from "../pages/WomenScreen";

/* El objeto lazy de React permite definir un componente que es cargado dinámicamente. Esto 
ayuda a reducir el tamaño del bundle para demorar los componentes de carga que no son usados
 durante la renderización inicial */
// const Navbar = lazy(() => import("../components/Navbar"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));

const AppRouter = () => {
  return (
    /* El componente lazy debería entonces ser renderizado adentro de un componente Suspense, 
    lo que nos permite mostrar algún contenido predeterminado (como un indicador de carga) 
    mientras estamos esperando a que el componente lazy cargue */
    /* El prop fallback obligatorio acepta cualquier elemento de React que quieras renderizar
     mientras esperas que el lazy component cargue. Puedes poner el componente Suspense en 
     cualquier parte sobre el componente lazy. Incluso puedes envolver múltiples componentes 
     lazy con un solo componente Suspense. */
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        {/* Se carga el componente Navbar */}
        <Routes>
          {/* Se crea un Routes con las rutas de la aplicación que 
      solo son accesibles si ya se ha iniciado sesión */}
          <Route end path='/men' element={<MenScreen />} />
          <Route end path='/women' element={<WomenScreen />} />
          <Route end path='/search' element={<SearchScreen />} />
          <Route end path='/character/:id' element={<CharacterScreen />} />
          <Route path='*' element={<Navigate to='/men' />} />
          {/* Cualquier ruta que no sea la mencionada redirige a "/men" */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
