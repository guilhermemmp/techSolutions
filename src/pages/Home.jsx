import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import servicos from "../data/servicos.json";
import CarouselHome from "../components/Carousel";
import Card from "../components/card/card";
import "../styles/global.css";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <Menu />
      <main>
        <div className="container">
          <CarouselHome />
          <h2>Informações</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
