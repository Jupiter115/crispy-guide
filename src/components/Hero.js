import {Carousel,Container,Card} from 'react-bootstrap'
import React, { useEffect,useState} from 'react'
import { InfoSharp } from '@mui/icons-material';



export default function Hero(data) {

    const URL = "https://mysterious-temple-52384.herokuapp.com/"

    const filteredArray = () => {
          data.item.filter(product=>{
            return product.hero === true;
        
        })
    }
    
    console.log(data.hero)

  return (
    <Container>
        <Carousel>
            <Card className='product-deal'>
                <Card.Img src = {data.image} />


            </Card>
        </Carousel>



    </Container>
  )
}
