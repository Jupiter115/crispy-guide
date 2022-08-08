import React, { useEffect, useState } from "react";

export default function Test() {
  const [input, setInput] = useState({ menu: { name: "", test: "" } });
  function handleChange(e) {
    const { id, value } = e.target;
    setInput((prevObj) => {
      return { ...input, menu: { name: "bob" } };
    });
  }

  useEffect(() => console.log(input), [input]);
  //made some changes
  return (
    <div>
      <input
        id="name"
        placeholder="name"
        // onChange={handleChange}
        onChange={handleChange}
      ></input>
    </div>
  );
}
