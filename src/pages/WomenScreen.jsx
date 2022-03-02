import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  /* Se crea la constante men con los personajes que son Mujeres */
  const women = Characters.filter(character => character.type === "m");
  return (
    <div className='container mt-3'>
      <h1>Women Screen</h1>
      <hr />
      <div className='row'>
        {women.map(woman => (
          <Card key={women.id} {...woman} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
