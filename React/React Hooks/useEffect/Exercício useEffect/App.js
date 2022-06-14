// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo:
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js) defina o produto clicado como uma preferência do usuário no localStorage, quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
//-----------------------------------------------------------------------------------

import React from "react";
import Produto from "./Produto";

const App = () => {

  const [ produto, setProduto ] = React.useState(null);

  React.useEffect(() => { // verifica se tem valor salvo no localStorage, caso não tenha ele não retornará nada
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal);
  }, [] // esse efeito não tem nenhuma dependência)

  React.useEffect(() => { // verifica se já tem valor salvo no localStorage, caso não tenha ele irá inserir o valor
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick(event) { // pega o texto dentro de cada botão
    const currentTarget = event.target.innerText.toLowerCase();
    setProduto(currentTarget);
  }

  return (
    <>
      <h1>Preferências: {produto}</h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </>
  );

};

export default App;