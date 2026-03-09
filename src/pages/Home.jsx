import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CarouselHome from "../components/Carousel";
import Card from "../components/Card";
import "../styles/style.css";

const Home = () => {
  return (
    <>
      <Menu />
      <main>
        <h1>Bem vindo a TechSolutions!</h1>
        <p>
          Na TechSolutions, estamos comprometidos em fornecer soluções
          tecnológicas inovadoras e personalizadas para atender às necessidades
          únicas de cada cliente. Nossa equipe de especialistas trabalha em
          estreita colaboração com nossos clientes para entender seus desafios e
          objetivos, garantindo que nossas soluções sejam eficazes e eficientes.
        </p>
        <section>
          <h2>Página de Produtos</h2>
          <p>
            Explore nossa variedade de produtos que atendem às suas necessidades
            tecnológicas. Oferecemos desde software personalizado até hardware
            de última geração.
          </p>

          <h2>Sobre a Empresa</h2>
          <p>
            A TechSolutions é uma empresa dedicada a oferecer soluções
            tecnológicas de alta qualidade. Nossa missão é inovar e transformar
            o mercado com serviços que realmente fazem a diferença.
          </p>

          <h2>Página de Contato</h2>
          <p>
            Entre em contato conosco para saber mais sobre nossos serviços ou
            para discutir como podemos ajudar sua empresa a crescer. Estamos
            aqui para ajudar!
          </p>
        </section>
        <div className="container">
          <CarouselHome />
          <h2>Informações</h2>
          <div className="grid">
            <Card
              titulo="Serviço 1"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?1"
            />
            <Card
              titulo="Serviço 2"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?2"
            />
            <Card
              titulo="Serviço 3"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?3"
            />
            <Card
              titulo="Serviço 4"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?4"
            />
            <Card
              titulo="Serviço 5"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?5"
            />
            <Card
              titulo="Serviço 6"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?6"
            />
            <Card
              titulo="Serviço 7"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?7"
            />
            <Card
              titulo="Serviço 8"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?8"
            />
            <Card
              titulo="Serviço 9"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?9"
            />
            <Card
              titulo="Serviço 10"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?10"
            />
            <Card
              titulo="Serviço 11"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?11"
            />
            <Card
              titulo="Serviço 12"
              texto="Descrição do serviço"
              imagem="https://picsum.photos/200?12"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
