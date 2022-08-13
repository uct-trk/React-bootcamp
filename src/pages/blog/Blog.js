import React from "react";
import { NavLink } from "react-router-dom";
function Blog() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/blog/categories">categories</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
