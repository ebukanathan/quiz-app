import React, { useRef, useState } from "react";

function Task() {
  const [todo, setTodo] = useState([]);

  const inputRef = useRef();

  function handleSubmit() {
    setTodo([...todo, inputRef.current.value]);
    inputRef.current.value = "";
    inputRef.current.focus();
    console.log(inputRef);
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>+ add</button>

      {todo.map((item) => item)}
    </div>
  );
}

export default Task;
