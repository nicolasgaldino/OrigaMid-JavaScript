import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {

  const { dados } = React.useContext(GlobalContext); // desestruturação de 'dados'

  if(dados === null) return null;
  return (
    <>
      Produtos: {dados.map(item => <li key={item.id}>{item.nome}</li>)}
    </>
  )
}

export default Produto