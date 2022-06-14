// Os links abaixo puxam dados de um produto em formato JSON:
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto. Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela. Mostre apenas um produto por vez mostre a mensagem carregando... enquanto o fetch é realizado.
//-----------------------------------------------------------------------------------

import React from "react";
import Produto from "./Produto";

const App = () => {

  const [ dados, setDados ] = React.useState(null);
  const [ carregando, setCarregando ] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const currentTar = event.target.innerText.toLowerCase();
    const url = `https://ranekapi.origamid.dev/json/api/produto/${currentTar}`;
    const response = await fetch(url);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>Notebook</button>
      <button style={{margin: '1rem'}} onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </>
  );

};

export default App;