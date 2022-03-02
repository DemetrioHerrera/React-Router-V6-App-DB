import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, type, id }) => {
  const imgPath = `/assets/${type}-${id}.png`;
  return (
    <div className='card m-3 col-12 col-md-4' style={{ width: 200 }}>
      {/* Se habilita el lasy loading en la imágen para evitar que su carga requiera muchos recursos */}
      <img loading='lazy' className='card-img-top' src={imgPath} alt={id} />

      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>
          <Link className='card-link' to={`/character/${id}`}>
            Ver más ...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
