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
          {title.length > 45 ? title.slice(0, 45) + "..." : title}
        </Card.Title>
        <Card.Body className="image-container">
          <Link to={`/product/${_id}`}>
            <Card.Img src={image} alt="productPic" />
          </Link>
        </Card.Body>

        <Card.Body className="price-container">
          <Card.Text className="orig-price">
            Original Price <span className="strikethrough"> ${orig}</span>
          </Card.Text>

          <Card.Text className="sale-price">
            On Sale For <br />$ {price}
          </Card.Text>

          <Link className="productCard_details" to={`/product/${_id}`}>
            <Button className="productCard_button" variant="contained">
              See Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
