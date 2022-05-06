// Tipos de Dados
// Todos são primitivos exceto os objetos.
// Primitivos são dados imutáveis.
var nome = 'Nícolas'; // String
var idade = 23; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
//------------------------------------------------------------------------------------
// Verificador de Dados
// typeof null retorna object
var nome = 'André';
console.log(typeof nome);
// retorna string
//------------------------------------------------------------------------------------
// String
// Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
//------------------------------------------------------------------------------------
// Aspas duplas, simples e template string
// Não necessariamente precisamos atribuir valores a uma variável
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido
//------------------------------------------------------------------------------------
// Template String
var nome = 'Nícolas',
    idade = 23,
    profissao = 'programador',
    ouSeja = 'garoto de programa';
console.log(`${nome} tem ${idade} anos e trabalha como ${profissao}, ou seja, ele é um ${ouSeja}.`);
//------------------------------------------------------------------------------------
// Exercício
// Declare uma variável contendo uma string
var frase = 'Olá Mundo!';

// Declare uma variável contendo um número dentro de uma string
var apresentacao = 'Meu nome é Nícolas e tenho ' + 23 + ' anos.'
console.log(apresentacao);

// Declare uma variável com a sua idade
var ano = 23;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var primNome = 'Nícolas',
    segNome = 'Galdino';
console.log(`${primNome} ${segNome}`);

// Coloque a seguinte frase em uma variável: It's time
var phrase;
phrase = "It's time";
console.log(phrase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof primNome);