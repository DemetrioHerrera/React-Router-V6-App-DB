import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const { id } = useParams(); /* Se destructura el parametro id de 
    los parámetros de la ruta */
  const navigate = useNavigate();

  const { type, name, description } = Characters.find(
    character => character.id === id
  ); // Encuentra el personaje que tenga el mismo id que el de los parametros de la ruta
  const imgPath = `/assets/${type}-${id}.png`; //Crea la ruta de la img con template string

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='container row  mt-5'>
      <div className='col-8'>
        <img
          className='img-thumbnail'
          src={imgPath}
          alt={id}
          style={{ width: "70%", height: "400px" }}
        />
      </div>
      <div className='col-4'>
        <h2>Nombre: {name}</h2>
        <p>Descripción: {description}</p>
        <button className='btn btn-outline-warning' onClick={handleBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
