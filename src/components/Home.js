import React from "react";
import { useAuth } from "../context";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <Header />
      {user && <div>Bu alan yalnız giriş yapılınca gözükür</div>}
      <Footer />
    </div>
  );
}

export default Home;
