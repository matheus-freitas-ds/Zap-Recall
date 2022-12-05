import styled from "styled-components";
import seta_play from "./img/seta_play.png";

export default function Footer(props) {
  const {iconeChange, counter} = props
  
  return (
    <ContainerFooter>
      <p data-identifier='flashcard-counter'>{counter}/{iconeChange.length} CONCLUÍDOS</p>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;