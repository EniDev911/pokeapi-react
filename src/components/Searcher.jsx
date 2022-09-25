import React,{useState} from 'react'

const Searcher = () => {

  const [pokemon, setPokemon] = useState("");
  const [inputPokemon, setInputPokemon] = useState("");

  // let pokemon = "pikachu"

  const fetchPokemon = async (pokemon) =>{
    try{
      let URI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await fetch(URI);
      const json = await res.json();
      setPokemon(json)

    } catch(err){
      console.log(err.message)
    }
  }

  const handleOnchage = (e) =>{
    console.log(e.target.value);
    setInputPokemon(e.target.value.toLowerCase())
  }
  
  const borderPokemon = () =>{
    const type = pokemon.types[0].type.name
    let borderColor = "";
      if (type === "fire"){
         borderColor= "red";
      }else if (type === "electric"){
        borderColor = "yellow"
      } else if (type === "water"){
        borderColor = "blue"
      }
      return borderColor
  }

  return (
    <div>
      <div>
        <input type="text"
        placeholder='Buscar pokemón' 
        onChange={handleOnchage}/>
      </div>
      <div>
        <button onClick={async ()=> {await fetchPokemon(inputPokemon)}}>Buscar</button>
        { !pokemon ? <p>No hay pokemon</p> 
            : (
              <>
              <ul style={{padding: 0}}>
                <li>nombre: {pokemon.name.toUpperCase()} </li>
                <li>peso : {pokemon.weight}</li>
                <li>tipo: {pokemon.types[0].type.name}</li>
              </ul>
              <img src={pokemon.sprites.other.home.front_default}
                style={{filter: `drop-shadow(2px 3px 12px ${borderPokemon()})`}}alt="" />
              </>
              )}
      </div>
    </div>
  )
}

export default Searcher