import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import throbber from "../assets/180-ring-with-bg.svg";
import Search from "./Search";
import ProductHero from "./ProductHero";
import { Button } from "react-bootstrap";
import HeroData from "./HeroData";

const axios = require("axios");

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(`https://mysterious-temple-52384.herokuapp.com/`)
      .then((res) => setData(res.data))
      .then(setTimeout(() => setLoading(false), 200));
  }, [search]);

  return (
    <div>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />

      {loading ? (
        <img src={throbber} alt="trobber" />
      ) : (
        <>
          <ProductHero data={data} />
          <div className="card-container">
            {data.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </>
      )}
      <center>
        <Button className="product_adminButton">
          <Link to="/admin" className="product_adminLink" variant="text">
            Admin Login
          </Link>
        </Button>
      </center>
    </div>
  );
}
