import React from "react";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import produtos from "../../data/produtos.json";
import Card from "../../components/card/card.jsx";
import "./produtos.css";

const Produtos = () => {
  return (
    <>
      <div className="background"></div>
      <Menu />
      <div className="container">
        <h1>Produtos</h1>
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              titulo={produto.nome}
              texto={produto.descricao}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Produtos;
