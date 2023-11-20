import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#121212, #212b45);
`;

export const Title = styled.h1`
  font-size: 85px;
  color: #fff;
  animation: flipTitle 2s;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Main = styled.main`
  margin-top: 20px;

  h2 {
    margin: 16px 0;
    font-size: 35px;
    text-align: left; // Alinhando o texto à esquerda
  }

  span {
    margin-bottom: 16px;
    font-weight: bold;
    text-align: left; // Alinhando o texto à esquerda
  }
`;
