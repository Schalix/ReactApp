import React, { useEffect } from 'react'
import ListItem from './ListItem'
// later: add this to import React: useState

const List = () => {

  // const [data, setData] = useState()

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
          fetchData()
      }, [])

    //fetch data asynchronously
    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()
        // setData(data)
        console.log('data', data)
      
    }
    return (
      <div>
          <h1>List </h1>
          {data ? data.map((item, index) => {
                      return (
                          <ListItem item={item} key={item._id} />
                      )
                  }) : <h2>Loading...</h2>}
      </div>            
    )
}

export default List