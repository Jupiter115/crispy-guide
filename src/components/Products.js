import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/seeds.json";

export default function Products() {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          imageUrl={product.image}
          salePrice={product["sale-price"]}
          origPrice={product["orig-price"]}
        />
      ))}
    </div>
  );
}
