import React from "react";
import { Container ,Card } from "react-bootstrap";
import "../index.css"
import {Link} from "react-router-dom"
export default function ProductCard(props) {

  return (
    <Container className = "card-container">
      <Card className = "product-container">

        <Card.Title className = "product-title">{props.title.length > 50 ? props.title.slice (0,50) + "..." : props.title}</Card.Title>
      

        <Link to = "/Product">
          <Card.Img src={props.imageUrl} alt="productPic" />
       </Link>
      
       
       
        <Card.Body className = "price-container">
    
          <Card.Text className = "sale-price">
            Sale Price! < br />
            $ {props.salePrice}
          </Card.Text>
          <Card.Text className = "orig-price">
            Original Price <br />
            <span className ="strikethrough"> ${props.origPrice}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
