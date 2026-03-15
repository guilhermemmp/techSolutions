import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
    </>
  )
}

export default App
