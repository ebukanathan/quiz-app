import React from "react";

function Questions({ questions, dispatch, answer }) {
  return (
    <div>
      {questions.question}

      <div className="options">
        {questions.options.map((option, index) => (
          <button
            key={option}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              index === questions.correctOption ? "correct" : "wrong"
            }
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })} //from the data the answers are represent as iondex of the option
          >
            {option}
          </button>
        ))}
      </div>

      <button onClick={() => dispatch({ type: "NextQuestion" })}>next</button>
    </div>
  );
}

export default Questions;
