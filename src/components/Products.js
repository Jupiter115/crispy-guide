import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import products from "../data/seeds.json";
import { Link } from "react-router-dom";
import throbber from "../assets/180-ring-with-bg.svg";
import Search from "./Search";
import ProductHero from "./ProductHero";

const axios = require("axios");

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mysterious-temple-52384.herokuapp.com/")
      .then((res) => setData(res.data))
      .then(setTimeout(() => setLoading(false), 200));
  }, []);

  return (
    <div>
      <Search />
      {loading ? (
        <img src={throbber} alt="trobber" />
      ) : (
        <>
          <ProductHero />
          <div className="card-container">
            {data.map((product, index) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </>
      )}
      <Link to="/admin">
        <p>Admin Login</p>
      </Link>
    </div>
  );
}
