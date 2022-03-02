import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = () => {
  const location = useLocation(); //Se crea una instancia del objeto location
  //Se obtiene el valor del query string "q"
  const { q = "" } = queryString.parse(location.search);

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(q); //Se crea el estado inputValue
  const [characters, setCharacters] = useState([]); //Se crea el estado characters

  const handleChange = e => {
    //Cada vez que cambie el texto en el input
    const value = e.target.value;
    //Se actualiza el valor del estado Input value al texto introducido
    setInputValue(value);
  };

  const handleSubmit = e => {
    //Cuando se envía el formulario
    e.preventDefault(); //evita que se recargue la página automáticamente
    // Se agrega el query string a la ruta con el valor del input
    navigate(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    /* Si el valor del input quitando espacios es diferente a nada
      indica que se ha buscado algo, por lo que se busca los personajes
      que coincidan con lo instroducido */
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const findCharacters = Characters.filter(character =>
        character.name.toLocaleLowerCase().includes(value)
      );
      //Obtiene los personajes cuyos nombres coincidan parcialmente con el texto introducido
      setCharacters(findCharacters); //Setea el estado characters con los personajes encontrados
    } else {
      /* En caso de que no haya nada en el campo de busqueda, setea el estado characters a un
      Arreglo vacío*/
      setCharacters([]);
    }
  };

  useEffect(() => {
    /* cada vez que se actualice el valor de q cuando se vuelva a 
    renderizar el componente */
    getCharacters();
  }, [q]);

  return (
    <div className='container'>
      <h1>Search Screen</h1>
      <hr />
      <div className='row'>
        <div className='col-6'>
          <h2>Searh</h2>
          <form onSubmit={handleSubmit}>
            <label className='form-label w-100'>
              Character:{" "}
              <input
                placeholder='Name Character'
                type='text'
                className='form-control'
                autoComplete='off'
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type='submit' className='btn btn-info w-100'>
              Search
            </button>
          </form>
        </div>
        <div className='col-6'>
          <h2>Reults: {characters.length}</h2>
          {characters.length === 0 && (
            /* Si no hay coincidencia entoces muestra una alerta */
            <div className='alert alert-warning text-center'>
              Please Search a Character
            </div>
          )}
          {characters.map(character => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
