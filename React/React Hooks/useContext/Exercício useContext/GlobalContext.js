import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [ dados, setDados ] = React.useState(null); // estado reativo a ser atualizado assim que receber os dados

  React.useEffect(() => { // efito para fazer o fetch assim que usuário abrir o app
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';
    fetch(url)
    .then((response) => response.json()) // recebe os dados da API e transforma em JSON
    .then(json => setDados(json)) // pega os dados transformados em json e insere no 'dados'
  }, []) // sem necessidade dependência

  function limparDados() {
    setDados(null) // função para limpar 'setDados'
  }

  return <GlobalContext.Provider value={{ dados, limparDados }}>{ children }</GlobalContext.Provider> // expondo o valor de 'dados'
};