import styled from "styled-components";
import React from "react";
import seta_play from "./assets/img/seta_play.png";
import seta_virar from "./assets/img/seta_virar.png";
import icone_certo from "./assets/img/icone_certo.png";
import icone_erro from "./assets/img/icone_erro.png";
import icone_quase from "./assets/img/icone_quase.png";

export default function Question(props) {
  const {
    questionChange,
    setQuestionChange,
    iconeChange,
    setIconeChange,
    setCounter,
    counter,
    deck,
    index,
  } = props;

  function OpenQuestion(i) {
    if (
      !questionChange.includes("opened_Q") &&
      !questionChange.includes("opened_R") &&
      iconeChange[index] === seta_play
    ) {
      const newChange = [...questionChange];
      newChange[i] = "opened_Q";
      setQuestionChange(newChange);

      const newIconeChange = [...iconeChange];
      newIconeChange[i] = seta_virar;
      setIconeChange(newIconeChange);
    }
  }

  function TurnFlashcard(i) {
    const newChange = [...questionChange];
    newChange[i] = "opened_R";
    setQuestionChange(newChange);
  }

  function VerifyButton(i, icone) {
    const newChange = [...questionChange];
    newChange[i] = "closed";
    setQuestionChange(newChange);

    const newIconeChange = [...iconeChange];
    newIconeChange[i] = icone;
    setIconeChange(newIconeChange);

    setCounter(counter + 1);
  }

  if (questionChange[index] === "closed") {
    return (
      <ContainerQuestion>
        <Pergunta data-identifier='flashcard-index-item'>Pergunta {index + 1}</Pergunta>
        <div data-identifier='flashcard-shown-btn'>
        <img data-identifier='flashcard-status'
          onClick={() => OpenQuestion(index)}
          src={iconeChange[index]}
          alt="play"
        />
        </div>

      </ContainerQuestion>
    );
  } else if (questionChange[index] === "opened_Q") {
    return (
      <ContainerQuestionOpened>
        <p data-identifier='flashcard-question'>{deck[index].Q}</p>
        <img data-identifier='flashcard-turn-btn'
          onClick={() => TurnFlashcard(index)}
          src={iconeChange[index]}
          alt="flashcard question"
        />
      </ContainerQuestionOpened>
    );
  } else if (questionChange[index] === "opened_R") {
    return (
      <ContainerQuestionOpened>
        <p data-identifier='flashcard-answer'>{deck[index].R}</p>
        <ContainerButtons>
        <div data-identifier='forgot-btn'>
          <Button
            onClick={() => VerifyButton(index, icone_erro, 'color: #FF3030')} 
            cor="#FF3030">
            Não lembrei
          </Button>
        </div>
        <div data-identifier='almost-forgot-btn'>
          <Button
            onClick={() => VerifyButton(index, icone_quase, 'color: #FF922E')}
            cor="#FF922E">
            Quase Lembrei
          </Button>
        </div>
        <div data-identifier='zap-btn'>
          <Button 
            onClick={() => VerifyButton(index, icone_certo, 'color: #2FBE34')}
            cor="#2FBE34">
            Zap!
          </Button>
        </div>

        </ContainerButtons>
      </ContainerQuestionOpened>
    );
  }
}

const ContainerQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Pergunta = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const ContainerQuestionOpened = styled(ContainerQuestion)`
  min-height: 100px;
  background: #ffffd5;
  position: relative;
  flex-direction: column;
  p {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-right: 45px;
`;

const Button = styled.button`
  width: 95px;
  height: 40px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.cor};
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
`;