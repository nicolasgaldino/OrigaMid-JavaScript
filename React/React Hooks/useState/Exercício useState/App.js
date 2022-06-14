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
    setCarregando(true); // exibe a mensagem 'Carregando'
    const currentTar = event.target.innerText.toLowerCase(); // pega o texto dentro do botão e o transforma para minúsculo
    const url = `https://ranekapi.origamid.dev/json/api/produto/${currentTar}`; // pega o texto do botão armazenado na 'currentTar', e insere no endpoint para fazer a requisição
    const response = await fetch(url); // espera a resposta da API
    const json = await response.json(); // converte a resposta para json
    setDados(json); // define o valor de 'setDados' como sendo a resposta e json da API
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