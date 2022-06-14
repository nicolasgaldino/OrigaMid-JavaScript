// JSX Arrays
// O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
const App = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
};
//----------------------------------------------------------------------------------------
// Keys
// O JSX necessita de uma key única para cada elemento da Array. https://reactjs.org/docs/lists-and-keys.html
const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};
//----------------------------------------------------------------------------------------
// Map
// É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

//----------------------------------------------------------------------------------------
// Array de objetos
// O cenário mais comum é trabalhar com array's de objetos.
const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};
//----------------------------------------------------------------------------------------
// Exercício

// Organize os produtos como mostrado no vídeo, mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {

  const dados = produtos.filter(({ preco }) => Number(preco.replace('R$ ', '')));

  return (
    <>
      {dados.map(({ id, nome, preco, cores }) =>
      <div key={id}>
        <h1>{nome}</h1>
        <p>Preço: {preco}</p>
        <ul>
          {cores.map((cor) => (
            <li style={{background: cor, color: 'white'}} key={cor}>{cor}</li>
          ))}
        </ul>
      </div>)}
    </>
  );

};