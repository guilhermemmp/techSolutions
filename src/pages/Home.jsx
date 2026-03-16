import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CarouselHome from "../components/Carousel";
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
