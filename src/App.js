import { useState, useEffect } from 'react';
import { AppContainer } from "./AppStyle"
import './App.css';
import Filtro from './Filtro/Filtro';
import Home from './Home/Home';
import Carrinho from './Carrinho/Carrinho';
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [ordenacao, setOrdenacao] = useState("crescente");
  const [valorMax, setValorMax] = useState(0);
  const [valorMin, setValorMin] = useState(0);
  const [buscaNome, setBuscaNome] = useState("");

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }
  }, [carrinho])
  useEffect(() => {
    const carrinhoStorage = localStorage.getItem("carrinho")
    if (carrinhoStorage) {
      setCarrinho(JSON.parse(carrinhoStorage))
    }
  }, [])



  return (
    <div>
      <h2>Labecommerce</h2>
      <GlobalStyle/>
      <AppContainer>
        <Filtro
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
          setValorMin={setValorMin}
          setValorMax={setValorMax}
          setBuscaNome={setBuscaNome}
        />
        <Home
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          ordenacao={ordenacao}
          valorMax={valorMax}
          valorMin={valorMin}
          buscaNome={buscaNome}
        />
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
      </AppContainer>

    </div>
  );
}

export default App;
