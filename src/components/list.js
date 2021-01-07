import React, { useEffect, useState} from 'react'
import ListItem from './ListItem'
import Image from 'react-bootstrap/Image'

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
          {/* Loop on array for creating list */}
            {data ? data.map((item, index) => {
              return (
                <div>
                  <ListItem item={item} key={item.id} />
                </div>
                 
                        // <Container>
                        //   <Row>
                        //     <Col xs={6} md={4}>
                             
                        //     </Col>
                        //     <Col xs={6} md={4}>
                        //       <Image src="holder.js/171x180" roundedCircle />
                        //     </Col>
                        //     <Col xs={6} md={4}>
                        //       <Image src="holder.js/171x180" thumbnail />
                        //     </Col>
                        //   </Row>
                        // </Container>
                          
                      )
            }) : <h2>Loading...</h2>}
      </div>            
    )
}

export default List