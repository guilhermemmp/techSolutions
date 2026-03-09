import { useState } from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  function enviarFormulario(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  }
  return (
    <>
        <Menu />
     <div className="container">
      <h1>Contato</h1>
      <form onSubmit={enviarFormulario} className="form">
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensagem"
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer />
    </>
  );
}
export default Contato;
