import React from 'react'
import ProductHero from './ProductHero';
import { useState } from "react"
export default function HeroData(props) {

    
    
    
    
    
    
    
    const [deal,setDeal] = useState([])

    const filteredArray = props.data.filter((product) => {
         return product.hero
      });
      console.log(filteredArray)
return (
    <div className = "carousel-container">
      {filteredArray.map((hero) => {
        <ProductHero key = {hero._id} item = {hero} />
      })}
    </div>
  )
}
