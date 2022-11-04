import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/Review">Review</Link>
          </li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
}
