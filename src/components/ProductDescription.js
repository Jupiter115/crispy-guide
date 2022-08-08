import { Container, Card, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ProductDescription() {
  const [product, setProduct] = useState([])
  const { id } = useParams()

useEffect(() => {
  axios
  .get(`https://mysterious-temple-52384.herokuapp.com/products/${id}`)
  .then((res) => setProduct(res.data))
},[])

  return (
    <Container>
        <Card className = "description">

            <Card.Img src = {product.image} />


            <Card.Title>
            {product.title}
            </Card.Title>


            <Card.Body>
                <Card.Text> 

                  Description: {product.description}
                </Card.Text>
                <Card.Text>
                  Original Price: {product.orig}
                </Card.Text>
                <Card.Text>
                  Sale Price: {product.price}

                </Card.Text>
            </Card.Body>

            <Button>
              <a href={product.link}> See Jupiter Deal </a>
            </Button>

        </Card>

        <Button>
          <Link to={`/admin`}>Admin</Link>
        </Button>


    </Container>
      
  )
}
