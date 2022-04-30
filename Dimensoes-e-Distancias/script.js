// Height e width
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const section0 = document.querySelector('.animais');
section0.clientHeight; // height + padding
section0.offsetHeight; // height + padding + border
section0.scrollHeight; // height total, mesmo dentro de scroll
// Mesma coisa para o Width, clientWidth
//-----------------------------------------------------------------------------------------
// Offsettop e offsetleft
const section1 = document.querySelector('.animais');
// Distância entre o topo do elemento e o topo da página
section1.offsetTop;
// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section1.offsetLeft;
//-----------------------------------------------------------------------------------------
// Getboundingclientrect()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const section2 = document.querySelector('.animais');
const rect = section2.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
//-----------------------------------------------------------------------------------------
// Window
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço
window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}
//-----------------------------------------------------------------------------------------
// Matchmedia()
// Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
/*
DICA
Selecione o elemento no inspetor (dom)
Abra o console e digite $0 para selecionar o mesmo
Os elementos selecionados anteriormente são $1, $2 ...
*/
//-----------------------------------------------------------------------------------------
// Exercício

// Verifique a distância da primeira imagem em relação ao topo da página
const imgs = document.querySelector('img');
console.log(imgs.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imagens = document.querySelectorAll('img');
  let tot = 0;
  imagens.forEach((i) => {
    tot += i.offsetWidth;
  });
  console.log(tot)
};
window.onload = () => {
  somaImgs();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((i) => {
  const linkWidht = i.offsetWidth;
  const linkHeight = i.offsetHeight;
  if(linkWidht >= 48 && linkHeight >= 48) {
    console.log(i, 'Possui Acessibilidade')
  } else {
    console.log(i, 'Não Possui Acessibilidade')
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
// Minha solução:
const mobMenu = document.querySelector('.menu')
if(window.innerWidth < 720) {
  mobMenu.classList.add('menuMobile')
};

// Solução do professor:
const browserSmall = window.matchMedia('(max-widht: 720px)').matches;
if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
};