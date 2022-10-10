import EscolhaDeFilme from "./components/EscolhaDeFilme/EscolhaDeFilme";
import Navbar from "./components/Navbar/Navbar";
import { Titulo } from "./components/EscolhaDeFilme/EscolhaDeFilmeStyle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EscolhaDeHorario from "./components/EscolhaDeHorario/EscolhaDeHorario";
import EscolhaDeAssento from "./components/EscolhadeAssento/EscolhaDeAssento";
import Sucesso from "./components/Sucesso/Sucesso";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Titulo />
      <Routes>
        <Route path="/" element={<EscolhaDeFilme />} />
        <Route path="/sessoes/:id" element={<EscolhaDeHorario />} />
        <Route path="/assentos/:ide/:hora/:dia" element={<EscolhaDeAssento />} />
        <Route path="/sucesso/:id/:filme/:hora" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
