import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import seeds from "../data/seeds.json";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminDashEditPost() {
  const navigate = useNavigate();
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
      <form action="submit">
        <label htmlFor="title">Title: </label>
        <br />
        <input type="text" id="title"></input>
        <br />
        <label htmlFor="orig">Original Price</label>
        <br />
        <input type="number" id="orig"></input>
        <br />
        <label htmlFor="price">Sale Price</label>
        <br />
        <input type="number" id="price"></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea type="text" id="description" rows="5" cols="25"></textarea>
        <br />
        <label htmlFor="image">Image Url</label>
        <br />
        <input type="text" id="image"></input>
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input type="text" id="category"></input>
        <br />
        <button>Post</button>
      </form>

      <br />
      <br />
      <Button variant="contained" color="error">
        DELETE <DeleteIcon fontSize="small" />
      </Button>
    </div>
  );
}
