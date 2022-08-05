import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import seeds from "../data/seeds.json";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios'

export default function AdminDashEditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const handleChange = (event) => {
		setProduct({ ...product, [event.target.id]: event.target.value });
	};
  const handleSubmit = (event) => {
		event.preventDefault();
		axios.put(`https://mysterious-temple-52384.herokuapp.com/products/${id}`, product)
		.then(() =>{
			navigate('/admin/dash')
		})
	};
  const handleDelete = () => {
		axios.delete(`https://mysterious-temple-52384.herokuapp.com/products/${id}`)
		.then(() => {
			navigate('/admin/dash')
		})
	};

  return (
    <div>
      <div>
        <Button onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon /> Cancel
        </Button>
      </div>
      <ProductCard
        title={seeds[0].title}
        description={seeds[0].description}
        imageUrl={seeds[0].image}
        salePrice={seeds[0]["price"]}
        origPrice={seeds[0]["orig"]}
      />
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <br />
        <input onChange={handleChange} type="text" id="title"></input>
        <br />
        <label htmlFor="orig">Original Price</label>
        <br />
        <input onChange={handleChange} type="number" id="orig"></input>
        <br />
        <label htmlFor="price">Sale Price</label>
        <br />
        <input onChange={handleChange} type="number" id="price"></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea onChange={handleChange} type="text" id="description" rows="5" cols="25"></textarea>
        <br />
        <label htmlFor="image">Image Url</label>
        <br />
        <input onChange={handleChange} type="text" id="image"></input>
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input onChange={handleChange} type="text" id="category"></input>
        <br />
        <button>Post</button>
      </form>

      <br />
      <br />
      <Button onClick={handleDelete} variant="contained" color="error">
        DELETE <DeleteIcon fontSize="small" />
      </Button>
    </div>
  );
}
