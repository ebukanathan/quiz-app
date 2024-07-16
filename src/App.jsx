// import DateCounter from "./DateCounter";

import { useEffect, useReducer } from "react";

import Header from "./Header";
// import Mainpage from "./Mainpage";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],
  status: "loading", //'loading,'error','active','finished'
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "QuestionLoad":
      return { ...state, status: "active" };

    case "NextQuestion":
      return { ...state, status: "active", index: state.index + 1 };

    case "newAnswer":
      return { ...state, answer: action.payload };

    default:
      throw new Error("action unknown");
  }
}
function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      // .then((data) => console.log(data))

      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <Header />
      <div className="">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questions={questions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
