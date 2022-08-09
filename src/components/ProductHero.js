


import React, { useState } from "react"
import  Carousel  from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
import { CarouselItem } from "react-bootstrap";


export default function ProductHero(props) {

  const [index,setIndex] = useState(0)
  const handleSelect = (selectedIndex , e) => {
    setIndex(selectedIndex)
  }
  const filteredArray = props.data.filter((product) => {
  return product.hero === true;
  });
  

  return (
    <>
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      {...filteredArray.forEach(hero => {
        <CarouselItem>
         <img src = {hero.image} />
         <Carousel.Caption>
          <h3>{hero.title}</h3>
         </Carousel.Caption>
         </CarouselItem>
        })}
    </Carousel>
    </>
  )