import React from 'react'
import Pokemon from './Pokemon'

const Pokedex = ({pokemones}) => {
  return (
    <div>
      <div className="header">
      <h1>Pokedex</h1>
      <p>Pagination</p>
      </div>
      <div className="grid-pokedex">
        {pokemones.map((pokemon, idx)=> {
          return (
            <Pokemon key={pokemon.name} pokemon={pokemon}/>
          )
        })
        }
      </div>
    </div>
  )
}

export default Pokedex