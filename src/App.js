import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";

import React from "react";
import styled from "styled-components";
import deck_main from "./Components/Deck";

import seta_play from "./assets/img/seta_play.png";

export default function App() {
  const arrayChange = deck_main.map((q) => "closed");
  const [questionChange, setQuestionChange] = React.useState(arrayChange);
  const [counter, setCounter] = React.useState(0)

  const arrayIconeChange = deck_main.map((i) => seta_play);
  const [iconeChange, setIconeChange] = React.useState(arrayIconeChange);
  return (
    <ScreenContainer>
      <Header />
      <Container
        questionChange={questionChange}
        setQuestionChange={setQuestionChange}
        deck={deck_main}
        iconeChange={iconeChange}
        setIconeChange={setIconeChange}
        setCounter={setCounter}
        counter={counter}
      />
      <Footer
        iconeChange={iconeChange}
        counter={counter}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;