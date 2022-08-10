import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FeaturedPlayList } from "@mui/icons-material";
import { Container } from "@mui/system";

export default function ProductHero(props) {
  const filteredArray = props.data.filter((product) => {
    return product.hero === true;
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div>
        <h3>Deal of the Day</h3>
      </div>
      <Slider {...settings}>
        {filteredArray.map((feature) => {
          return (
            <Container>
              <Card className="product-container">
                <Card.Title>{feature.title.length > 45 ? feature.title.slice(0,45) + "..." : feature.title}</Card.Title>
              </Card>
              <Card.Body className="image-container">
                <Card.Img src={feature.image} alt="product-pic" />
              </Card.Body>
              <Card.Body className="price-container">
                <Card.Text className="orig-price">
                  Original Price <span className="strikethrough"> ${feature.orig}</span>
                </Card.Text>

                <Card.Text className="sale-price">
                  On Sale For <br />$ {feature.price}
                </Card.Text>

                <Link className="productCard_details" to={`/product/${feature._id}`}>
                  <Button className="productCard_button" variant="contained">
                    See Details
                  </Button>
                </Link>
              </Card.Body>
            </Container>
          );
        })}
      </Slider>
    </div>
  );
}
