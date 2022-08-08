import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function AdminDashNewPost() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    orig: 0,
    price: 0,
    description: "",
    image: "",
    link:"",
    category: "",
    hero: false
  });


  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value});
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
    setProduct({...product, hero: event.target.checked});
  }


  return (
    <div>
      <div>
        <Button onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon /> Cancel
        </Button>
      </div>
      

      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="title"
          rows="2"
          cols="50"
        />
        <br />
        <label htmlFor="orig">Original Price</label>
        <br />
        <input onChange={handleChange} type="number" id="orig" step=".01" />
        <br />
        <label htmlFor="price">Sale Price</label>
        <br />
        <input onChange={handleChange} type="number" id="price" step=".01" />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="description"
          rows="10"
          cols="50"
        />
        <br />
        <label htmlFor="image">Image Url</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="image"
          rows="2"
          cols="50"
        />
        <br />
        <label htmlFor="link">Product Link</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="link"
          rows="2"
          cols="50"
        />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="category"
          rows="2"
          cols="50"
        />
        <br />
        Check if featured <Checkbox onClick={checkHero} />
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Post
        </Button>
      </form>
    </div>
  );
}
