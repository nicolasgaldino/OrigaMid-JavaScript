// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form é o objeto com os dados do formulário
  body: JSON.stringify(form),
});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from "react";
import { Form } from "./Form";

export default function App() {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [response, setResponse] = React.useState(null);

  function handleOnChange({ target }) {
    //função que pega os dados do input no formulário
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    // função que realiza a requisição na API, fazendo o POST e enviando os dados cadastrados nos campos do formulário
    const url = 'https://ranekapi.origamid.dev/json/api/usuario';

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
      .then((response) => {
        response.json()
        setResponse(response)
      })
      .catch((err) => console.log(err));
  }

  return (

    // formulário com label e input inteiramente componentizados

    <>
      <form onSubmit={handleSubmit}>
        <Form
          type="text"
          text="Nome"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          handleChange={handleOnChange}
        />
        <Form
          type="email"
          text="Email"
          name="email"
          placeholder="Email"
          value={form.email}
          handleChange={handleOnChange}
        />
        <Form
          type="password"
          text="Senha"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          handleChange={handleOnChange}
        />
        <Form
          type="number"
          text="CEP"
          name="cep"
          placeholder="CEP"
          value={form.cep}
          handleChange={handleOnChange}
        />
        <Form
          type="number"
          text="Rua"
          name="rua"
          placeholder="Endereço"
          value={form.rua}
          handleChange={handleOnChange}
        />
        <Form
          type="number"
          text="Número"
          name="numero"
          placeholder="Rua"
          value={form.numero}
          handleChange={handleOnChange}
        />
        <Form
          type="text"
          text="Bairro"
          name="bairro"
          placeholder="Bairro"
          value={form.bairro}
          handleChange={handleOnChange}
        />
        <Form
          type="text"
          text="Cidade"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          handleChange={handleOnChange}
        />
        <Form
          type="text"
          text="Estado"
          name="estado"
          placeholder="Estado"
          value={form.estado}
          handleChange={handleOnChange}
        />
      </form>

      {response && response.ok && <p>Cadastro realizado com sucesso!</p>}

      <button onClick={handleSubmit}>Enviar</button>
    </>

  );

}
