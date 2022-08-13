import React from 'react'
import { Outlet } from 'react-router-dom'
function BlogLayout() {
  return (
    <div>
      <h3>Blog sayfası</h3>
      <Outlet />
    </div>
  )
}

export default BlogLayout