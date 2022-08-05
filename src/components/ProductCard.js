import React from "react";
import { Card } from "react-bootstrap";
import "../index.css"
export default function ProductCard(props) {
  return (
    <div>
      <Card className = "product-container">
        <Card.Img className ="img" src={props.imageUrl} alt="productPic" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text className = "sale-price">
            {props.salePrice}
          </Card.Text>
          <Card.Text className = "orig-price">
            {props.origPrice}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
