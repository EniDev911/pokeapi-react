import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import Searcher from './components/Searcher'



function App() {

  const [pokemones, setPokemones] = useState([]);

    /**
   * 
   * @param {Number} limit 'La cantidad de pokemones que vamos a recuperar'
   * @param {Number} offset 'Desde que pokemón comenzar a contar'
   * @returns {Array} 'Arreglo de pokemones con su nombre y su url'
   */
  const fetchPokemones = async (limit=10, offset=0) =>{
    
    try{
      let URI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      const res = await fetch(URI);
      return await res.json()
    } catch(err){
      console.log(err.message)
    } 
  }

  /**
   * 
   * @param {String} url 'url del endpoint del pokemón'
   * @returns {Object} 'El pokemoón con toda su información'
   */
  const fetchPokemon = async(url) =>{
    try{
      const response = await fetch(url);
      return await response.json()
    }catch(e){console.log(e.message)}
  }


  const fetchDataPokemones  = async () =>{
    try{
      const data = await fetchPokemones(807, 0)
      const promises = data.results.map(async(pokemon) =>{
          return await fetchPokemon(pokemon.url)
        }
      )
      const results = await Promise.all(promises)
      setPokemones(await results)
      console.log(results)
    } catch(err){console.log(err.message)}

  }


  useEffect(()=> {
    fetchDataPokemones();
  }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <Searcher/>
      <Pokedex pokemones={pokemones}/>
    </div>
  )
}

export default App
