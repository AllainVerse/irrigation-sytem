import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Cards from "@/components/Features/Cards";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cards />
      <Articles />
      <Footer />
    </div>
  );
};

export default HomePage;
