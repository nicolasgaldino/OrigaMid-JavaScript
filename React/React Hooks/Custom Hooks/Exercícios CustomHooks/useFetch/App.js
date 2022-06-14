import React from 'react';
import useFetch from './useFetch';

const App = () => {

  const { request, data, loading, erro } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/');
    }
    fetchData();
  }, [ request ])

  if(erro) return <p>Erro 404</p>
  if(loading) return <p>Carregando...</p>
  if(data)
    return (
      <>
        {data.map((item) => <li key={item.id}>{item.nome}</li>)}
      </>
    );
  else return null;
};

export default App;