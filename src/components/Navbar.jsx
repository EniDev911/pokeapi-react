import React from 'react'

const Navbar = () => {
  const logoURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  return (
    <nav>
       <div className="logo">
        <img src={logoURL} alt="imagen" />
      </div>
    </nav>
  )
}

export default Navbar