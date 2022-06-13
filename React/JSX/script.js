// JSX
// JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.
const App0 = () => {
  return <button>Comprar</button>;
};
// É transformado em
const App0 = () => {
  return React.createElement('button', null, 'Comprar');
};
// É possível utilizar a extensão .jsx
//----------------------------------------------------------------------------------------
// Atributos
// Atributos podem ser passados como no HTML, porém com alguns casos especiais.
const App1 = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};
//----------------------------------------------------------------------------------------
// Casos especiais
// O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.
const App2 = () => {
  return <div className="grid">Origamid</div>;
};

const App2 = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};
// https://reactjs.org/docs/dom-elements.html
//----------------------------------------------------------------------------------------
// camelCase
// Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.
const App3 = () => {
  return <video autoPlay />;
};
//----------------------------------------------------------------------------------------
// Expressões / Variáveis
// Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.
const App4 = () => {
  const nome = 'André';
  return <p>{nome}</p>;
};

const App4 = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};

const App4 = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};
// Também posso atribuir JSX direto a uma constante/variável
const Titulo = <h1>Meu título</h1>;

const App4 = () => {
  return <div>{Titulo}</div>;
};
//----------------------------------------------------------------------------------------
// JSC expressões
// Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.
const App5 = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};
//----------------------------------------------------------------------------------------
// Style
// O style irá receber um objeto com as propriedades do elemento em camelCase.
const App6 = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};
//----------------------------------------------------------------------------------------
// Exercícios

// Mostre os dados da aplicação, como aprensetado no vídeo não utilize CSS externo, use o style para mudar as cores se a situação estiver ativa pinte de verde, inativa vermelho se o gasto for maior que 10000 mostre uma mensagem.

const luana = {
  nome: 'Luana',
  idade: 27,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

const mario = {
  nome: 'Mário',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'},
  ],
  ativa: false,
};

const ativStyle = {
  color: 'green',
}

const inativStyle = {
  color: 'red',
}

const App = () => {

  const dados = luana;

  const gastosTotal = dados.compras.map(item => 
    Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
  /*
  map() para retornar uma nova array a partir da que eu já tenho;
  replace() para remover os itens da string;
  Number para transformar em números;
  reduce() para somar os números da array;
  reduce(a + b) sempre soma os dois primeiros valores, e busca os próximos para somar o total já calculado;
  */

  return (
    <> 
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade} anos</p>
      <p>Situação: <span style={dados.ativa ? ativStyle : inativStyle}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: R${gastosTotal}</p>
      {gastosTotal > 10000 && <p>Você gastou mais de R$10.000</p>}
    </>
  );
};
