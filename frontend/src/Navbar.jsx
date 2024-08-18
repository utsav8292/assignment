import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <span className="span">Abstract </span> | Help Center
      </a>
      <ul>
        <li>
          <button className="request-btn">
            <Link to="/cards">Submit a request</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
