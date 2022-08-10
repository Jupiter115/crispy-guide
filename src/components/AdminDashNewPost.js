import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminDashNewPostGet from "./AdminDashNewPostGet";

import axios from "axios";

export default function AdminDashNewPost() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    orig: 0,
    price: 0,
    description: "",
    image: "",
    link: "",
    category: "",
    hero: false,
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://mysterious-temple-52384.herokuapp.com/products", product)
      .then(() => {
        navigate("/admin/dash");
      });
  };

  const checkHero = (event) => {
    setProduct({ ...product, hero: event.target.checked });
  };

  return (
    <div className="adminPost_container">
      <h2 className="font-body">Add New Deal</h2>
      <Button onClick={() => navigate(-1)} className="adminPost_cancel">
        <KeyboardBackspaceIcon /> Cancel
      </Button>
      <AdminDashNewPostGet setProduct={setProduct} />
      <form action="submit" onSubmit={handleSubmit}>
        <label className="font-body" htmlFor="title">
          Product Title:
        </label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="title"
          rows="2"
          className="width-100 adminPost_input"
          value={product.title}
        />
        <br />
        <label className="font-body" htmlFor="orig">
          Original Price
        </label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          id="orig"
          step=".01"
          className="adminPost_input"
        />
        <br />
        <label className="font-body" htmlFor="price">
          Sale Price
        </label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          id="price"
          step=".01"
          className="adminPost_input"
        />
        <br />
        <label className="font-body" htmlFor="description">
          Description
        </label>
        <br />
        <textarea
          className="width-100 adminPost_input"
          onChange={handleChange}
          type="text"
          id="description"
          rows="10"
          value={product.description}
        />
        <br />
        <label className="font-body" htmlFor="image">
          Image Url
        </label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="image"
          rows="2"
          className="width-100 adminPost_input"
          value={product.image}
        />
        <br />
        <label className="font-body" htmlFor="link">
          Product Link
        </label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="link"
          rows="2"
          className="width-100 adminPost_input"
          value={product.link}
        />
        <br />
        <label className="font-body" htmlFor="category">
          Category
        </label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="category"
          rows="2"
          className="width-100 adminPost_input"
        />

        <p className="font-body">
          Check if featured
          <Checkbox className="adminDash_checkbox" onClick={checkHero} />
        </p>

        <Button
          className="adminDash_button"
          variant="contained"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
