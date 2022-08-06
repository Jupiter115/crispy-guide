import React from "react";
import { Container, Card } from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProductCard(props) {
  const { image, orig, price, title, _id } = props.item;
  return (
    <Container>
      <Card className="product-container">
        <Card.Title className="product-title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </Card.Title>
        <Card.Body className="image-container">
          <Link to={`/product/${_id}`}>
            <Card.Img src={image} alt="productPic" />
          </Link>
        </Card.Body>
        <Card.Body className="price-container">
          <Card.Text className="sale-price">
            Sale Price! <br />$ {price}
          </Card.Text>
          <Card.Text className="orig-price">
            Original Price <br />
            <span className="strikethrough"> ${orig}</span>
          </Card.Text>
          <Link to={`/product/${_id}`}>
            <Button variant="contained">See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
