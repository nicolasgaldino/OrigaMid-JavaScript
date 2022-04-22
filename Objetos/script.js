// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome (chave) e valor.
//-----------------------------------------------------------------------------------------
// Métodos
// É uma propriedade que possui ma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
//-----------------------------------------------------------------------------------------
// Métodos
// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}
//-----------------------------------------------------------------------------------------
// Organizar o código
// Objetos servem para organizar o código em pquenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório
var pi = Math.PI;
console.log(pi); // 3.14
// Math é um objeto nativo de JavaScript. Já percebeu que o console é um objeto e log() um método?
//-----------------------------------------------------------------------------------------
// Criar um objeto
// Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'
//-----------------------------------------------------------------------------------------
// Dot notation get
// Acesse proprieades de um objeto utilizando ponto '.'
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'
//-----------------------------------------------------------------------------------------
// Dot notation set
// Substitua o valor de uma proprieade utilizando '.' e o '=' após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'
//-----------------------------------------------------------------------------------------
// Adicionar propriedades  métodos
// Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';
//-----------------------------------------------------------------------------------------
// Palavra-chave 'this'
// this fará um referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); // 25 // sem o this, seria 60
// this irá retornar o próprio objeto.
//-----------------------------------------------------------------------------------------
// Protótipo e herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
// hasOwnProperty é um método de Object
//-----------------------------------------------------------------------------------------
// Exercícios

// Crie um objeto com os seus dados pessoais ele deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Nícolas',
  sobrenome: 'Galdino',
  idade: 23,
  profissao: 'Programador',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labradror',
  cor: 'preto',
  idade: 10,
  latir(sexo) {
    if (sexo === 'homem') {
      return 'Latir!';
    } else {
      return 'Nada.';
    }
}
}