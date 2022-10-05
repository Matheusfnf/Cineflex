import './App.css';
import EscolhaDeFilme from './EscolhaDeFilme/EscolhaDeFilme';
import Navbar from './Navbar/Navbar';
import { Titulo } from './EscolhaDeFilme/EscolhaDeFilmeStyle';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Titulo />
      <EscolhaDeFilme />
      
    </div>
  );
}

export default App;
