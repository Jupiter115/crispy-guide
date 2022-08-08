import React from "react";
import { Link } from "react-router-dom";
import jupiter from "../assets/jupiter-900656-removebg-preview-removebg-preview.png";

export default function Header() {
  return (
    <header>
      <div>
        <img src={jupiter} alt="logo" className="header_logo" />
      </div>
      <h1 className="header_title">
        <Link to="/">Jupiter Deals</Link>
      </h1>
      <p className='header_subtitle'>The sales are out of this world.</p>
    </header>
  );
}
