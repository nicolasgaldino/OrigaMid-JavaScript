import React from "react";

// Custom Hook para acessar as preferências do usuário, preferências essas armzenadas no 'localStorage'

const useLocalStorage = ( key, inicial ) => { 

  const [ state, setState ] = React.useState(() => { // estado reativo que armazena os dados no 'localStorage'
    const local = window.localStorage.getItem(key); // variável que pega os dados armzanods no 'localStorage'
    return local ? local : inicial; // retorno que verifica se já há algum valor salvo no 'localStorage', se houver ele puxa o valor, se não ele irá retornar o valor inicial
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, state) // armazena os valores no 'localStorage', definindo os valores chave para o item e o conteúdo do item
  }, [ key, state ]) // valores de dependência para o uso do efeito

  return [ state, setState ] // retorno da função para o usuário utilizar

}

export default useLocalStorage;