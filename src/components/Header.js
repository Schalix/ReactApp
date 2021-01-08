import React from 'react'
// Only needed this for testing bootstrap. Can be deleted when test is over:
// import Image from 'react-bootstrap/Image'

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
          {/* Test to see if bootstrap "rounded image" works. It does not. ????
          WANNA TEST AGAIN?! Un-comment import image above!
          <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" rounded /> */}
        </header>
    )
}

export default Header 