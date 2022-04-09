import React from "react";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Products from "../component/Products";
import Newsletter from "../component/NewsLetter";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
