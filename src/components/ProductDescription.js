import { Container, Card } from 'react-bootstrap'
import React from 'react'

export default function ProductDescription(props) {
  return (
    <Container>
        <Card className = "description">

            <Card.Img src = "https://m.media-amazon.com/images/I/61ku9UiTwkL._AC_SX569_.jpg" />

            <Card.Title>

            </Card.Title>


            <Card.Body>
                <Card.Text> 
                "Funko Pop! Marvel: Spider-Man: No Way Home - Spider-Man en traje integrado"


                </Card.Text>
            </Card.Body>



        </Card>



    </Container>
      
  )
}
