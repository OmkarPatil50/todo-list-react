import React, { useState } from "react";
import ListHandler from "./ListHandler";
import "./styles.css";

export default function App() {
  const [inputToDo, setInputToDo] = useState(null);
  const [toDoList, setToDOList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const onChangeHandler = (event) => {
    setInputToDo(event.target.value);
  };

  const onClickHandler = () => {
    if (inputToDo) {
      setToDOList([...toDoList, { item: inputToDo, key: Date.now() }]);
      setInputToDo("");
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="header">
          <span>To-do</span> List
        </h1>

        <div className="input-container">
          <input
            placeholder="Add things to-do"
            value={inputToDo}
            className="box-input"
            onChange={onChangeHandler}
          />
          <button onClick={onClickHandler} className="input-btn">
            Add
          </button>
        </div>
        <hr />
        <div className="todo-list-container">
          <ListHandler toDoList={toDoList} setToDOList={setToDOList} />
        </div>
      </div>
    </div>
  );
}
