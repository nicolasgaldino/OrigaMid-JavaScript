import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {

  const [ produto, setProduto ] = useLocalStorage('produto', '') // armazenando preferência de produtos no 'localStorage'
  function handleClick({target}) { // desestruturando o evento para ter acesso ao 'innex.Text' e conseguir acessar o texto dos botões
    setProduto(target.innerText); // pega o texto do botão clicado, e armazena em 'produto', e também no 'localStorage'
  }

  return (
    <>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>NoteBook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );

};

export default App;