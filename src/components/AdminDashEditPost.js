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
    setProduct({ ...product, hero: event.target.checked });
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

  return (
    <div className="adminEdit_container">
      <h2 className="font-body">Edit Deal</h2>
      <Button onClick={() => navigate(-1)} className="adminPost_cancel">
        <KeyboardBackspaceIcon /> Cancel
      </Button>

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
          cols="50"
          defaultValue={prodVal.title}
          className="width-100 adminPost_input"
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
          defaultValue={prodVal.orig}
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
          defaultValue={prodVal.price}
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
          cols="50"
          defaultValue={prodVal.description}
        />
        <br />
        <label className="font-body" htmlFor="image">
          Image Url
        </label>
        <br />
        <textarea
          className="width-100 adminPost_input"
          onChange={handleChange}
          type="text"
          id="image"
          rows="2"
          cols="50"
          defaultValue={prodVal.image}
        />
        <br />
        <img src={prodVal.image} className="adminEdit_img" alt="product" />
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
          defaultValue={prodVal.link}
          className="width-100 adminPost_input"
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
          defaultValue={prodVal.category}
          className="width-100 adminPost_input"
        />
        <br />
        Check if featured{" "}
        <Checkbox className="adminDash_checkbox" onChange={checkHero} />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={handleSubmit}
          className="adminDash_button"
        >
          Post
        </Button>
      </form>

      <Button
        onClick={handleDelete}
        className="adminDash_button adminDash_button-delete"
        variant="contained"
        color="error"
      >
        DELETE <DeleteIcon fontSize="small" />
      </Button>
    </div>
  );
}
