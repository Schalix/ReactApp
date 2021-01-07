// import React from 'react'
import Image from 'react-bootstrap/Image'

const ListItem = ({ item }) => {

    const styledDiv = {
        backgroundColor: 'azure',
        // fontSize: 12
    }

    return (
        <div style={styledDiv} key={item._id}>
            <img src={item.image} alt={item.name} />
            {/* rounded */}
        </div>
    )
}
export default ListItem