import React, { useState } from "react";
import axios from "axios";

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
        // props.setProduct({ ...res.data, link: input });
      })
      .then(() => setInput(""))
      .then(() => setLoading(false));
  };

  return (
    <div>
      Beta: Retrieve product information from an Amazon product page.
      {loading ? (
        <p>loading...</p>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Enter Amazon URL"
            onChange={handleChange}
            value={input}
          ></input>
          <button onClick={handleClick}>Submit</button>
        </form>
      )}
    </div>
  );
}
