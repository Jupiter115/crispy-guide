import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/seeds.json";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <div className="card-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            imageUrl={product.image}
            salePrice={product["price"]}
            origPrice={product["orig"]}
          />
        ))}
      </div>
      <Link to="/admin">
        <p>Admin Login</p>
      </Link>
    </div>
  );
}
