import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const MyApi = () => {
  // hooks
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  /**
   *
   * @param {Number} limit 'La cantidad de pokemones que vamos a recuperar'
   * @param {Number} offset 'Desde que pokemón comenzar a contar'
   * @returns {Array} 'Arreglo de pokemones con su nombre y su url'
   */
  const fetchPokemones = async (limit = 10, offset = 0) => {
    try {
      let URI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const res = await fetch(URI);
      return await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };

  /**
   *
   * @param {String} url 'url del endpoint del pokemón'
   * @returns {Object} 'El pokemoón con toda su información'
   */
  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const fetchDataPokemones = async () => {
      /*
    Esta función se encarda de pedir la cantidad de pokemones
    Y llena el estado de con objetos de pokemones donde están todos sus atributos
    */
      try {
        const data = await fetchPokemones(600);
        const promises = data.results.map(async (pokemon) => {
          return await fetchPokemon(pokemon.url);
        });
        const results = await Promise.all(await promises);
        setPokemones(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchDataPokemones();
  }, []);

  const handleOnChange = (e) => setBusqueda(e.target.value);
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <input type="text" placeholder="Buscar pokemón"
        onChange={handleOnChange} />
      </div>
      <div className="grid-pokedex">
        {pokemones
          .filter((pokemon) => {
            return pokemon.name
              .toLowerCase()
              .includes(busqueda.toLowerCase());
          }).reverse()
          .map((pokemon, idx) => {
            return <Pokemon key={pokemon.name} pokemon={pokemon} />;
          })}
      </div>
    </div>
  );
};

export default MyApi;
