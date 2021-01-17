import React, { useEffect, useState} from 'react'
import ListItem from './ListItem'
import { Container } from 'react-bootstrap';
// , Row, Col

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
    const styleList = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignContent: 'space-around',

        }
    return (
      <Container style={styleList}>
          {/* Loop on array for creating list */}
            {data ? data.map((item, index) => {
              return (
                // Trying to put Items in flexbox. So far failed: 
                // className="d-flex flex-row"
                       <ListItem item={item} key={item.id} />
                      )
            }) : <h2>Loading...</h2>}
      </Container>            
    )
}

export default List


// ooooold code, tests for bootstrap flexcontainer:
// Source for classname solution: https://mdbootstrap.com/docs/react/utilities/flexbox/



{/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card> */}
                  {/* <Container>
                    <Row>
                      <Col lg={true}></Col>
                    </Row>
                  </Container> */}

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
                          