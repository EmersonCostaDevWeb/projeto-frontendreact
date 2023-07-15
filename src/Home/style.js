import styled from "styled-components";

export const ProdutoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  height: fit-content;
  width: 360px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  gap:8px;
  padding: 1%;
  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.20);
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  padding: 0%;
  margin: 0%;
`;

export const MainContainer = styled.main`
    margin-top:12px;
    width: 12000px;
    display: flex;
    flex-wrap: wrap;
    gap:5px;
    font-size: 15px;
    border-radius: 18px;
`
export const BotaoComprar = styled.button`
  background-color: darkblue;
  color:white;
  cursor:pointer;
  border-radius: 2%;
  margin-bottom: 2px;
  padding: 2%;

`
export const Titulo = styled.h3`
  font-size: 22px;
  margin: 12px;
  font-weight: bolder;

`
export const DivContainer = styled.div`
  flex-grow: 2;
  display: flex;
  font-weight: bold;
  padding-left: 8px;
  div{
    display: flex;
    justify-content: space-between;
  }
`