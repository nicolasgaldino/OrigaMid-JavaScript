// Síncrono vs Assíncrono
// Síncrono - Espera a tarefa acabar para continuar com a próxima.
// Assíncrono - Move para a próximo tarefa antes da anterior terminar. O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue).
// Exemplos - setTimeout, Ajax, Promises, Fetch, Async.
//-----------------------------------------------------------------------------------
//Vantagens
// Carregando no fundo - Não trava o script. É possível utilizar o site enquanto o processamento é realizado no fundo.
// Função ao término - Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.
// Requisições ao servidor - Não precisamos recarregar a página por completo à cada requisição feita ao servidor.