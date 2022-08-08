import React, { useState } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const todoItems = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    dispatch({ type: "ADD_TODO", payload: { name: userInput } });
    setUserInput("");
  };

  return (
    <div className="todo">
      <div className="todo__input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          placeholder="Add Todo ...."
        />
        <button onClick={addTodoHandler}>
          <span>Add Todo</span>
        </button>
      </div>
      <div className="todo__list">
        <ul>
          {todoItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <span>del</span>
              <span>edit</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
