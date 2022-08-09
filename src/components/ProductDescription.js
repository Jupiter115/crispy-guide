import { Container, Card, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Button as MaButton } from '@mui/material'

export default function ProductDescription() {
  const [product, setProduct] = useState([])
  const { id } = useParams()

useEffect(() => {
  axios
  .get(`https://mysterious-temple-52384.herokuapp.com/products/${id}`)
  .then((res) => setProduct(res.data))
},[id])

  return (
    <Container>
        <Card className = "description">

            <Card.Img className='description-image' src = {product.image}  />


            <Card.Title className='product-title'>
            {product.title}
            </Card.Title>


            <Card.Body>
                <Card.Text className='product-description'> 

                  Description: {product.description}
                </Card.Text>
                <Card.Text className='orig-price'>
                  Original Price: <span className='strikethrough'>{product.orig}</span>
                </Card.Text>
                <Card.Text className='sale-price'>
                  Sale Price: {product.price}

                </Card.Text>
            </Card.Body>

            <Button className='productCard_button'>
              <a href={product.link} className='product-link'> See Jupiter Deal </a>
            </Button>

        </Card>
        <center>
        <MaButton className='product_adminButton'>
          <Link to={`/admin`} className='product_adminLink'>Admin Login</Link>
        </MaButton>
        </center>

    </Container>
      
  )
}
