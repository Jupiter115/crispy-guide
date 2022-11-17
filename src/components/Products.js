import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import throbber from "../assets/180-ring-with-bg.svg";
import Search from "./Search";
import { Button } from "@mui/material";

import ProductHero from "./ProductHero";

const axios = require("axios");

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(true);

  const getFetch = function () {
    axios
      .get(`https://jdbackend.wskcreative.com/`)
      .then((res) => setData(res.data))
      .then(setTimeout(() => setLoading(false), 200));
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div>
      <Search
        handleSearch={setData}
        searchData={data}
        getFetch={getFetch}
        setShowHero={setShowHero}
      />

      {loading ? (
        <center>
          <img src={throbber} alt="trobber" />
        </center>
      ) : (
        <>
          {showHero && <ProductHero data={data} />}
          <div className="card-container">
            {data
              .slice(0)
              .reverse()
              .map((product) => (
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
