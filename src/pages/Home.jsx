import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import servicos from "../data/servicos.json";
import CarouselHome from "../components/Carousel";
import Card from "../components/card/card";
import "../styles/style.css";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <Menu />
      <main>
        <div className="container">
          <CarouselHome />
          <h2>Informações</h2>
          <div className="grid">
            {servicos.map((servico) => (
            <Card
              key={servico.id}
              titulo={servico.titulo}
              texto={servico.texto}
              imagem={servico.imagem}
            />
          ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
