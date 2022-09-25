import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import Searcher from './components/Searcher'



function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(()=> {
    console.log("rendering")
  }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <Searcher/>
      <Pokedex/>
    </div>
  )
}

export default App
