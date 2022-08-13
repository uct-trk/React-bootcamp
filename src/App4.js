import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog404 from "./pages/Blog404";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import "./style.css";

function App4() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && "aktif"}>
          Anasayfa
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            background: isActive ? "yellow" : "transparent",
          })}
        >
          Iletisim
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path="categories" element={<Categories />} />
          <Route path="post/:url" element={<Post />} />
          <Route path="*" element={<Blog404 />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App4;
