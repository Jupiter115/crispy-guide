import React, { useState } from "react";
import AdminDash from "./AdminDash";

export default function Admin() {
  const [input, setInput] = useState("");
  const [showDash, setShowDash] = useState(false);
  function handleChange(e) {
    setInput(e.target.value);
  }
  return <div></div>;
}
