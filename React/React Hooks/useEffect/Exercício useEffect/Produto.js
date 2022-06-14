import React from 'react'

const Produto = ({ produto }) => {

  const [ dados, setDados ] = React.useState(null);

  React.useEffect(() => { // verifica se já tem valor no localStorage e faz a requisição na API
    const url = `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    if(produto !== null)
      fetch(url)
        .then((reponse) => reponse.json())
        .then((json) => setDados(json));
  }, [produto] //depende do produto para carregar o efeito);

  if(dados === null) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  )

}

export default Produto