import React from 'react'

const ListItem = ({ item }) => {

    const styledDiv = {
        backgroundColor: 'grey',
        fontSize: 12
    }

    return (
        <div style={styledDiv} key={item._id}>
            <h2>
                {item.name}
            </h2>
        </div>

    )
}
export default ListItem