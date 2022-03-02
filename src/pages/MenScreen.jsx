import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  /* Se crea la constante men con los personajes que son hombres */
  const men = Characters.filter(charater => charater.type === "h");
  return (
    <div className='container mt-3'>
      <h1>Men Screen</h1>
      <hr />
      <div className='row'>
        {men.map(man => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
