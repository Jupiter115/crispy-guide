import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import products from "../data/seeds.json";
import { Link } from "react-router-dom";
import throbber from "../assets/180-ring-with-bg.svg";

const axios = require("axios");

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://mysterious-temple-52384.herokuapp.com/");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <img src={throbber} />
      ) : (
        <div className="card-container">
          {data.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.image}
              origPrice={product["orig"]}
              salePrice={product["price"]}
            />
          ))}
        </div>
      )}
      <Link to="/admin">
        <p>Admin Login</p>
      </Link>
    </div>
  );
}

{
  /* <div className="card-container">
{data.map((product, index) => (
  <ProductCard
    key={index}
    title={product.title}
    description={product.description}
    imageUrl={product.image}
    origPrice={product["orig"]}
    salePrice={product["price"]}
  />
))}
</div> */
}
