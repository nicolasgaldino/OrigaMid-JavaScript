// Outerhtml, innerhtml e innertext
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
const menu = document.querySelector('.menu');
menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags
menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
//-----------------------------------------------------------------------------------------
// Trasversing
// Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista0 = document.querySelector('.animais-lista');
lista0.parentElement; // pai
lista0.parentElement.parentElement; // pai do pai
lista0.previousElementSibling; // elemento acima
lista0.nextElementSibling; // elemento abaixo
lista0.children; // HTMLCollection com os filhos
lista0.children[0]; // primeiro filho
lista0.children[--lista0.children.length]; // último filho
lista0.querySelectorAll('li'); // todas as LI's
lista0.querySelector('li:last-child'); // último filho
//-----------------------------------------------------------------------------------------
// Element vs node
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
const lista1 = document.querySelector('.animais-lista');
lista1.previousElementSibling; // elemento acima
lista1.previousSibling; // node acima
lista1.firstChild; // primeiro node child
lista1.childNodes; // todos os node child
// Geralmente estamos atrás de um elemento e não de qualquer node em si.
//-----------------------------------------------------------------------------------------
// Manipulando elementos 
// É possível mover elementos no DOM com métodos de Node
const lista = document.querySelector('.animais-lista');
const contato0 = document.querySelector('.contato');
const titulo0 = contato0.querySelector('.titulo');
contato0.appendChild(lista); // move lista para o final de contato
contato0.insertBefore(lista, titulo0); // insere a lista antes de titulo
contato0.removeChild(titulo0); // remove titulo de contato
contato0.replaceChild(lista, titulo0); // substitui titulo por lista
//-----------------------------------------------------------------------------------------
// Novos elementos
// Podemos criar novos elementos com o método createElement()
const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');
animais.appendChild(novoH1);
//-----------------------------------------------------------------------------------------
// Clonar elementos
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais
const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
// true sinaliza para incluir os filhos
//-----------------------------------------------------------------------------------------
// Exercício

// Duplique o menu e adicione ele em copy
const nav = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneNav = nav.cloneNode(true);
copy.appendChild(cloneNav);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const priDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const proxiDd = priDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq1 = document.querySelector('.faq');
const animais0 = document.getElementById('animais');
faq1.innerHTML = animais0.innerHTML;