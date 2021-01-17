// import React from 'react'
import React from 'react';
//add after "React" if you use it again in the document: , { useState }
import { Image } from 'react-bootstrap';
//add after "Image" inside brackets if you use it again:  ", Col"

const ListItem = ({ item }) => {

    // const flipCard = {
    //     backgroundColor: 'transparent',
    //     margin: '10px',
    //     perspective: '1000px',
    // }

    // const flipCardInner = {
    //     position: 'relative',
    //     width: '100%',
    //     height: '100%',
    //     textAlign: 'center',
    //     transition: 'transform 0.8s',
    //     transformStyle: 'preserve-3d',
    // }

    // const turn = {
    //     "flip_card_hover__flip_card_inner": { "transform": "rotateY(180deg)" }
    // }
    
    // // flipCard hover
    // const [isShown, setIsShown] = useState(false);

    // const cardContainerHover = {
    //     card-container:hover .card-body {
    //     transform: rotateY(180deg);
    // }
    


    // const flipCardFront = {
    //     // position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     backfaceVisibility: 'hidden',
    //     backgroundColor: '#bbb',
    //     color: 'black',
    // }
    // // ToDo: find a way to not repeat your code
    const flipCardBack = {
        // position: 'absolute',
        // width: '100%',
        // height: '100%',
        // backfaceVisibility: 'hidden',
        backgroundColor: 'dodgerblue',
        color: 'white',
        // transform: 'totateY(180deg)',
    }

    return (
        <div key={item._id} >
            {/* style={flipCard} */}
            <div>
            {/* style={flipCardInner} */}
                <div>
                    {/* style={flipCardFront} */}
                    {/* <button
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                        Hover over me!
                    </button>
                    {isShown && (
                            <div>
                                        I'll appear when you hover over the button.
                            </div> 
                    )} */}
                    <Image src={item.image} alt={item.name} rounded stype='width:300px;height:300px'/>
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