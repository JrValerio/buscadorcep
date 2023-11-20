import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./SERVICE/api";
import { Container, Title, InputContainer, Main } from "./StyledApp";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      alert("Ops! Ocorreu um erro ao buscar o CEP. Tente novamente.");
      setInput("");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Container className="container">
      <Title className="title">Buscador de CEP</Title>

      <InputContainer className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </InputContainer>

      {Object.keys(cep).length > 0 && (
        <Main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </Main>
      )}
    </Container>
  );
}

export default App;
