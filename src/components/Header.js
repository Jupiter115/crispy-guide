import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="Header_title">
        <Link to="/">Jupiter Deals</Link>
      </h1>
    </header>
  );
}
