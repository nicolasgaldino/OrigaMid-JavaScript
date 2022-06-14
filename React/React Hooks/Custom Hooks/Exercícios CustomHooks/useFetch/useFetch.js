import React from "react";

const useFetch = () => {

  const [ data, setDada ] = React.useState(null); // estado reativo para segurar os dados
  const [ erro, setErro ] = React.useState(null); // estado reativo para verificar erros
  const [ loading, setLoading ] = React.useState(null); // estado reativo de loading

  const request = React.useCallback(async (url, options) => { // o fetch recebe sempre um segundo argumento quando tivermos outras opções e não apenas o 'get', por exemplo
    let response;
    let json; 
    // response e json declarados fora do try com 'let' para que seus valores possam ser modificados e acessado fora do try
    try {
      setErro(null); // se não for declarado como null inicialmente o site sempre exibirá a mensagem
      setLoading(true); // exibir mensagem enquanto esperar a promessa
      response = await fetch(url, options) // variável que aguarda a promessa ser respondida
      json = await response.json(); // variável que aguarda a promessa ser finalizada e transforma os dados recebidos em json
    } catch (erro) {
      setErro(erro);
      json = null;
    } finally { // indenpendente de ter erro ou acerto na promessa o finally sempre irá ocorrer
      setDada(json); // com acesso aos dados da API e já tendo os tranformado em json, passo os dados para o estado 'setDada'
      setLoading(false);
      return { response, json }
    }
  }, []);

  return { data, erro, loading, request } // retorno como objeto para puxar apenas a informação que eu quiser no momento, coisa que não seria possível se retornasse como uma Array
}

export default useFetch;