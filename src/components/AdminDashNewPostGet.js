import React, { useState } from "react";
import axios from "axios";
import throbber from "../assets/180-ring-with-bg.svg";
import { Button } from "@mui/material";

export default function AdminDashNewPostGet(props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://jupiter-scraper.herokuapp.com/new/${input}`)
      .then((res) => {
        console.log(res.data);
        console.log(input);
        props.setProduct({ ...res.data, link: input });
      })
      .then(() => setInput(""))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <div className="adminPostGet_container">
      <p className="adminPostGet_title">
        <span className="adminPostGet_beta">Beta: </span>Retrieve product
        information from an Amazon product page. <br />
        <br />
        Don't click too fast or use the same URL over and over again or else
        you'll break it for 10 minutes.
      </p>
      {loading ? (
        <img src={throbber} alt="trobber" />
      ) : (
        <form className="adminPostGet_form">
          <textarea
            type="text"
            placeholder="Enter Amazon URL"
            onChange={handleChange}
            className="adminPostGet_input"
            value={input}
          ></textarea>
          <br />
          <Button onClick={handleClick} className="adminPostGet_button">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}
