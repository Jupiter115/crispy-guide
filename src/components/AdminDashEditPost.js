import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Checkbox } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import seeds from "../data/seeds.json";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function AdminDashEditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };
  const checkHero = (event) => {
    setProduct({...product, hero: event.target.checked});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(
        `https://mysterious-temple-52384.herokuapp.com/products/${id}`,
        product
      )
      .then(() => {
        navigate("/admin/dash");
      });
  };
  const handleDelete = () => {
    axios
      .delete(`https://mysterious-temple-52384.herokuapp.com/products/${id}`)
      .then(() => {
        navigate("/admin/dash");
      });
  };

  const [prodVal, setProdVal] = useState({});
  const fetchData = () => {
    axios
      .get(`https://mysterious-temple-52384.herokuapp.com/products/${id}`)
      .then((res) => setProdVal(res.data));
  };
  useEffect(fetchData, []);
  useEffect(() => console.log(prodVal), [prodVal]);

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
          defaultValue={prodVal.title}
        />
        <br />
        <label htmlFor="orig">Original Price</label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          id="orig"
          step=".01"
          defaultValue={prodVal.orig}
        />
        <br />
        <label htmlFor="price">Sale Price</label>
        <br />
        <input
          onChange={handleChange}
          type="number"
          id="price"
          step=".01"
          defaultValue={prodVal.price}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="description"
          rows="10"
          cols="50"
          defaultValue={prodVal.description}
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
          defaultValue={prodVal.image}
        />
        <br />
        <img src={prodVal.image} alt="product" />
        <br />
        <label htmlFor="link">Product Link</label>
        <br />
        <textarea
          onChange={handleChange}
          type="text"
          id="link"
          rows="2"
          cols="50"
          defaultValue={prodVal.link}
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
          defaultValue={prodVal.category}
        />
        <br />
        Check if featured <Checkbox onChange={checkHero} />
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Post
        </Button>
      </form>

      <br />
      <br />
      <Button onClick={handleDelete} variant="contained" color="error">
        DELETE <DeleteIcon fontSize="small" />
      </Button>
    </div>
  );
}
