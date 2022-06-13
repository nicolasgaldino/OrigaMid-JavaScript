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