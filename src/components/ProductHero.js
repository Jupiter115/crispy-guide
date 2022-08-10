


import React, { useState } from "react"
import  Carousel  from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';


export default function ProductHero(props) {

  const [index,setIndex] = useState(0)
  const handleSelect = (selectedIndex , e) => {
    setIndex(selectedIndex)
  }
  const filteredArray = props.data.filter((product) => {
  return product.hero === true;
  });

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className = "car_item">
        <img 
          className = "carousel-img"
          src= "https://m.media-amazon.com/images/I/51-ZYnAU-SL._AC_SX466_.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item >
        <img
         className="carousel-img"
          src="https://m.media-amazon.com/images/I/51-ZYnAU-SL._AC_SX466_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://m.media-amazon.com/images/I/51-ZYnAU-SL._AC_SX466_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

  );
}
