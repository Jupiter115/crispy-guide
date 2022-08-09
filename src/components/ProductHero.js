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
  );
}
