// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apImg = document.querySelectorAll('img[src^="img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
const intLink = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const priH2 = document.querySelector('.animais-descricao h2');

// Selecione o último p do site
const ultP = document.querySelectorAll('p');
const ultimoParagrafo = ultP[ultP.length - 1];