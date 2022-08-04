import React from "react";

export default function Product_card(props) {
  return (
    <div>
      <img src={props.imageUrl} alt="Product Pic" />
      <h3 className="Product_card_title">{props.title}</h3>
      <p className="Product_card_body">{props.description}</p>
      <p className="Product_card_price-original">${props.origPrice}</p>
      <p className="Product_card_price-sale">${props.salePrice}</p>
    </div>
  );
}
