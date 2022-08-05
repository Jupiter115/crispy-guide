import React from "react";
import { Card } from "react-bootstrap";
import "../index.css"
export default function ProductCard(props) {
  return (
    <div className = "card-container">
      <Card className = "product-container">
        <Card.Title className = "product-title">{props.title.length > 50 ? props.title.slice (0,50) + "..." : props.title}</Card.Title>
        <Card.Img className ="img" src={props.imageUrl} alt="productPic" />
       
       
        <Card.Body className = "price-container">
    
          <Card.Text className = "sale-price">
            Sale Price! < br />
            $  {props.salePrice}
          </Card.Text>
          <Card.Text className = "orig-price">
            Original Price <br />
            <span class ="strikethrough"> ${props.origPrice}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
