import React, { useContext } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginProvider } from "./Admin";

export default function AdminDashNewPost() {
  const login = useContext(LoginProvider);
  console.log("Post " + login);

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Button onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon /> Cancel
        </Button>
      </div>
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
    </div>
  );
}
