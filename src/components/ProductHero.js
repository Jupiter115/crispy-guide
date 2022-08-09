import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import "bootstrap/dist/css/bootstrap.css";

import { Paper } from "@mui/material";

export default function ProductHero(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const filteredArray = props.data.filter((product) => {
    return product.hero === true;
  });

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      {filteredArray.map((feature) => {
        return (
            <div className="slide">
              <img className="carousel-img" src={feature.image} alt="product">
              </img>
                <h3>{feature.title}</h3>
            </div>
        
        );
      })}
    </Carousel>


    /*     <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>


      <Carousel.Item className="car_item">


        <div className="carousel-img">
          <img src={filteredArray[0].image} alt="First slide" />
        </div>
        <Carousel.Caption className ="hero-info-container">
          <h3>{filteredArray[0].title}</h3>
          <p>{filteredArray[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_img">
          <img
            className="carousel-img"
            src={filteredArray[1].image}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className ="hero-info-container">
          <h3>{filteredArray[1].title}</h3>
          <p>{filteredArray[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className="carousel-img">
          <img
            className="carousel-img"
            src={filteredArray[2].image}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className ="hero-info-container">
          <h3>{filteredArray[2].title}</h3>
          <p>{filteredArray && filteredArray[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */

  );
}
