import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pokedex from './components/MyApi'
import Searcher from './components/Searcher'
import MyApi from './components/MyApi'



function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <MyApi/>
    </div>
  )
}

export default App
