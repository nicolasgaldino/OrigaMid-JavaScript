// tudo é objeto
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'André';
nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
// Uma string herda propriedades e métodos do construtor String()
//-----------------------------------------------------------------------------------------
// Números
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.
//-----------------------------------------------------------------------------------------
// Funções
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
areaQuadrado.length; // 1
//-----------------------------------------------------------------------------------------
// Elementos DOM
var btn = document.querySelector('.btn');
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
});
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
//-----------------------------------------------------------------------------------------
// Objetos revolucionaram a programação
// Web API's são métodos e propriedades que permtem a interação JavaScript e Browser.
//-----------------------------------------------------------------------------------------
// Exercícios 

// Nomeie 3 propriedades ou métodos de strings
var nome = 'Nícolas ';
nome.repeat(4);
nome.length;
nome.charAt(0);

// Nomeie 5 propriedades ou métodos de elementos do DOM
var botao = document.querySelector('.btn');
btn.addEventListener;
btn.animate;
btn.appendChild;
btn.innerHTML;
btn.outerHTML;

// Busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function Clicar() {
  var copiarTxt = document.getElementById("entrada");
  navigator.clipboard.writeText(copiarTxt.value);
  alert("Área copiada: " + copiarTxt.value);
}