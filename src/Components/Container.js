import { Fragment } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import Question from "./Question";

export default function Container(props) {
  const { questionChange, setQuestionChange, iconeChange, setIconeChange, deck, setCounter, counter } = props;
  const layout = [];
  deck.map((p, index) =>
    layout.push(
      <Question 
      data-identifier = 'flashcard'
      key={index + 1} 
      questionChange={questionChange}
      setQuestionChange={setQuestionChange}
      iconeChange={iconeChange}
      setIconeChange={setIconeChange}
      setCounter={setCounter}
      counter={counter}
      deck={deck}
      index={index} 
      />
    )
  )
  return (
    <>
      {layout}
    </>
  );
} 