import styled from "styled-components";

export const Titulo = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
`;

export const Inputstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  input {
    width: 300px;
    height: 30px;
  }

  ::placeholder {
    color: lightgray;
  }
`;

export const Nomestyled = styled.div`
  label {
    margin-left: 50px;
    font-weight: 700;
  }
`;

export const ReservarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  button {
    padding: 10px;
    padding-left: 20px;
    padding-right: 30px;
    background-color: #e8833a;
    color: white;
    margin-top: 25px;
    margin-bottom: 30%;
  }
`;
export const AssentosStyled = styled.li`
  margin: 5px;
  color: black;
  width: 25px;
  text-align: center;
  padding: 5px;
  border-radius: 50%;

`;

export const Directionul = styled.ul`
  list-style-type: none;
  font-size: 10px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSelecionado = styled.div`
  flex-direction: column;

  p {
    margin-right: 20px;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #1aae9e;
    margin-left: 30px;
  }
`;

export const ContainerDisponivel = styled.div`
  p {
    margin-right: 20px;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #c3cfd9;
    margin-left: 30px;
  }
`;

export const ContainerIndisponivel = styled.div`
  p {
    margin-right: 20px;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #fbe192;
    margin-left: 30px;
  }
`;

export const HoraEDia = styled.div`

display: flex;
flex-direction: row;


`