import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";
import "./style.css";

function App4() {
  console.log(
    url("home.blog.post", {
      id: 3,
      url: "test-adana",
    })
  );

  return useRoutes(routes);
}

export default App4;
