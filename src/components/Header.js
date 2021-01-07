import React from 'react'
import Image from 'react-bootstrap/Image'

// create header
const Header = () => {

    const styledDiv = {
        backgroundColor: 'azure',
        color: 'purple',
    }
    
    return (
        <header style={styledDiv}>
          <h1>Rick and Morty</h1>
          <h2> Discover the Caracters</h2>
          <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" rounded />
        </header>
    )
}

export default Header 