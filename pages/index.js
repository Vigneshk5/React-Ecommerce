import product from "@/sanity_ecommerce/schemas/product";
import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>speakers of different variation</p>
      </div>
      <div className="products-container">
        {["product1", "product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
