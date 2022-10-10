import styled from "styled-components";

export const Titulo = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
`;

export const DiaStyled = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 400;
    text-align: start;
    margin-left: 24px;
    color: #293845;
    
  }
`;

export const HoraStyled = styled.div`
  margin-left: 24px;
  display: flex;
 
  
  

  .primeiro-horario {
    margin: 8px;
    padding: 1px;
    background-color: #e8833a;
    width: 82px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 400;
    border-radius: 3px;
  }

`;


export const HoraContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  

.primeiro-horario{
    display: flex;
    

  }
  
`;

export const FilmeSelecionado = styled.div`

background-color: #DFE6ED;
width: 100%;
height: 117px;
position: fixed;
bottom: 0;

display: flex;
justify-content: start;
align-items: center;
margin-top: 10px;

img{
    width: 48px;
    height: 72px;
    margin-right: 23px;
    margin-left: 10px;
    margin-top: 10px;
    border: 8px solid white;
}
h1{
    font-size: 26px;
    color: #293845;
    font-weight: 400;
    margin-left: 10px;
}



`;

