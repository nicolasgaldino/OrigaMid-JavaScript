// Replique a interface como a apresentada na aula utilize a array abaixo para mostrar os produtos quebre em componentes o que precisar ser reutilizado.
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

//-----------------------------------------------------------------------------------
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {

  let Pagina;
  const { pathname } = window.location;
  if(pathname === '/') {
    Pagina = Home;
  } else if (pathname === '/produtos') {
    Pagina = Produtos;
  }

  return (
    <>
    <Header />
    <Pagina />
    </>
  );

};

export default App;