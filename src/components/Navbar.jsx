import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext); //Se desestructura el dispatch del Context

  /* Se crea la variable navigate con el hook useNavigate */
  const navigate = useNavigate();

  const handleLogout = () => {
    // Cuando se presione el botón logout
    dispatch({ type: authTypes.logout }); //Se cambia el estado de la variable log del context a true
    navigate("/login"); //Carga la ruta (localhost:3000/login)
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <h2 className='navbar-brand'>DB App</h2>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                aria-current='page'
                to='/men'
              >
                Men
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                to='/women'
              >
                Women
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                to='/search'
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className='d-flex'>
            <button className='btn btn-danger' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
