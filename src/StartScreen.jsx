import React from "react";

function StartScreen({ questions, changeActive, dispatch }) {
  return (
    <div>
      <h2>welcome to the quiz app</h2>
      <p>you have {questions.length} questions to answer</p>
      <button onClick={() => dispatch({ type: "QuestionLoad" })}>
        lets Start
      </button>
    </div>
  );
}

export default StartScreen;
