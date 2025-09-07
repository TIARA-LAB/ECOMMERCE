import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import ExploreProducts from "../components/ExploreProducts";
import NewArrival from "../components/NewArrival";
import Features from "../components/Features";
import Banner from "../components/Banner";


export default function Home() {
  return (
    <div>
      <Banner />
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <PromoBanner />
      <ExploreProducts />
      <NewArrival />
      <Features />

    </div>
  );
}
