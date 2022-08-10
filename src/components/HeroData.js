
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap-carousel'
import "bootstrap/dist/css/bootstrap.css";

export default function HeroData(filter) {
  const deal = [filter];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {deal.map((item) => {
        <Carousel className="carousel"
        activeIndex={index}
        onSelect={handleSelect}>
            <ProductHero key = {item._id} hero = {item} />
        </Carousel>
      })}
    </div>
  );
}
