import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Empresa = () => {
  return (
    <>
      <div className="background"></div>
      <Menu />
      <div className="container">
        <h1>Sobre a Empresa</h1>
        <img src="https://picsum.photos/800/300" />
        <p>
          Nossa empresa foi criada com o objetivo de oferecer soluções modernas
          e eficientes para o mercado digital. Trabalhamos com tecnologias
          inovadoras e uma equipe especializada em desenvolvimento web e mobile.
          Nosso compromisso é entregar qualidade, segurança e desempenho em
          todos os projetos desenvolvidos. Acreditamos que a tecnologia pode
          transformar negócios e melhorar a experiência das pessoas. Atuamos em
          diversos segmentos do mercado e buscamos sempre a melhoria contínua
          dos nossos serviços.
        </p>
        <p>
          Ao longo dos anos conquistamos a confiança de diversos clientes,
          graças ao nosso comprometimento com prazos, qualidade e suporte
          técnico. Nossa missão é desenvolver sistemas modernos que atendam às
          necessidades atuais do mercado e preparem nossos clientes para o
          futuro digital. Valorizamos inovação, criatividade e trabalho em
          equipe.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Empresa;
