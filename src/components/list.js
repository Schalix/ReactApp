import React, { useEffect, useState} from 'react'
import ListItem from './ListItem'

//create List
const List = () => {
  //this data here is another variable than the data inside the fetch function.
  const [data, setData] = useState()

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
          fetchData()
      }, [])

    //fetch data asynchronously
    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()
        setData(data.results)      
  }
  //check how data looks like (printing outside of fetch-function ;)
  console.log('data', data)

    return (
      <div>
        <header>
          <h1> Rick and Morty </h1>
          <h2> Discover the Caracters</h2>
        </header>

        <main>
          {/* Loop on array for creating list */}
            {data ? data.map((item, index) => {
                      return (
                          <ListItem item={item} key={item.id} />
                      )
            }) : <h2>Loading...</h2>}
        </main>
      </div>            
    )
}

export default List