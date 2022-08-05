import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p>Jupiter Deals © Copyright {new Date().getFullYear()}</p>
      <Link to="/admin">
        <p>Admin Login</p>
      </Link>
    </footer>
  );
}
