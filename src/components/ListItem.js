// import React from 'react'
import { Image, Col } from 'react-bootstrap';

const ListItem = ({ item }) => {

    const flipCard = {
        backgroundColor: 'transparent',
        margin: '10px',
        perspective: '1000px',
        // "flip_card_hover__flip_card_inner": { "transform": "rotateY(180deg)" },
    }
    const flipCardInner = {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
    }
    const turn = {
        "flip_card_hover__flip_card_inner": { "transform": "rotateY(180deg)" }
    }

    // // flipCard hover

    const flipCardFront = {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: '#bbb',
        color: 'black',
    }
    // // ToDo: find a way to not repeat your code
    const flipCardBack = {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: 'dodgerblue',
        color: 'white',
        transform: 'totateY(180deg)',
    }

    return (
        <div style={flipCard} key={item._id} >
            <div style={flipCardInner}>
                <div  style={flipCardFront}>
                    <Image src={item.image} alt={item.name} rounded />
                </div>
                <div style={flipCardBack}>
                    <h1>Title back</h1>
                    <p>Text text text</p>
                </div>
            </div>
        </div>
    )
}
export default ListItem

// className="p-2"