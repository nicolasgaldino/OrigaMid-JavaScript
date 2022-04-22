// Variáveis
// Responsáveis por guardar dados na memória.
// Inicia com a palavra var, let ou const
var nome = 'André';
let idade0 = 28;
const possuiFaculdade = true;
//-------------------------------------------------------------------------------------------
// Evitam repetições
// DRY - Don't reapeat yourself
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
//-------------------------------------------------------------------------------------------
// Sintaxe
// Palavra chave var seguida do nome, sinal de igual e o valor.
var nome = 'André';
var idade = 28;
var possuiFaculdade0 = true;
//-------------------------------------------------------------------------------------------
// Vírgula
// Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var nome = 'André',
    idade = 28,
    possuiFaculdade1 = true;
//-------------------------------------------------------------------------------------------
// Sem valor
// Pode declarar ela e não atribuir valor inicialmente.
var precoAplicativo;
// retorna undefined
//-------------------------------------------------------------------------------------------
// Nome
// Os nomes podem iniciar com $, _, ou letras.
// Podem conter números mas não iniciar com eles
// Case sensitive nome é diferente de Nome
// Não utilizar palavras reservadas
// Camel case - é comum nomearmos assim: abrirModal
// Inválido
//var §nome;
var function0;
var possuiFaculdade3;
// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
//-------------------------------------------------------------------------------------------
// Declarar
// Erro ao tentar utilizar uma viriável que não foi declarada.
console.log(nome);
// retorna nome is not defined
//-------------------------------------------------------------------------------------------
// Hosting
// São movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = 'André';
// Retorna undefined
var profissao = 'Designer';
console.log(profissao);
// Retornar Designer
//-------------------------------------------------------------------------------------------
// Mudar valor atribuído
// É possível mudar valores atribuídos a variáveis decladas com var e let.
// Porém não é possível modificar valores das declaradas com const.
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade3 = true;
possuiFaculdade = false;
// Retorna um erro
//-------------------------------------------------------------------------------------------
// Exercício

// Declarar uma variável com o seu nome
var nome = 'Nícolas';

// Declarar uma variável com a sua idade
var idade = 23;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaPref;

// Atribuir valor a sua comida favorita
comidaPref = 'Macarrão com carne moída';

// Declarar 5 variáveis diferentes sem valores
var num0;
var num1;
var num2;
var num3;
var num4;
