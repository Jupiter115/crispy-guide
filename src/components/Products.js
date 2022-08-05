import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/seeds.json";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="card-container">
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
      <Link to="/admin">
        <p>Admin Login</p>
      </Link>
    </div>
  );
}
