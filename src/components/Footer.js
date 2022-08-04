import React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <Link to="/admin"><p>Admin Login</p></Link>
      <p>© Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}
