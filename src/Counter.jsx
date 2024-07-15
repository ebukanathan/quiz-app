import React, { useReducer, useRef, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADDTOCART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE": {
      const delitem = state.cart.filter((item) => item !== action.payload);
      return { ...state, cart: [delitem] };
    }
    default:
      return state;
  }
}
const initialState = {
  count: 1,
  cart: [],
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();
  //   const [counter, setCounter] = useState(0);
  //   const [user, setUser] = useState("ebuka");
  const handleIncrease = () => {
    // setCounter((c) => c + 1);
    dispatch({ type: "INCREMENT" });
  };

  const handledecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleCart = (item) => {
    dispatch({ type: "ADDTOCART", payload: item });
    console.log(state.cart);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleDel = (name) => {
    dispatch({ type: "DELETE", payload: name });
  };

  return (
    <div className="counter">
      <h4>counter</h4>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleCart(inputRef.current.value)}>
        + add item
      </button>
      <div className="number">
        <button onClick={handledecrease}>-</button>
        {state.count}
        <button onClick={handleIncrease}>+</button>
        {/* <p>Nice Job {state.count}</p> */}
      </div>
      <ul>
        {state.cart.map((item, index) => (
          <li key={index} onClick={() => handleDel(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
