import './App.css';
import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeTodotext = (event) => setTodoText(event.target.value);

  const onClickadd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
  <>
    <div className="input-area">
      <input placeholder="TODOを入力"
      value={todoText}
      onChange={onChangeTodotext}
      />
      <button onClick={onClickadd}>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              );
            })}
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      {completeTodos.map((todo) => {
        return(
        <div key={todo} className="list-row">
          <li>{todo}</li>
          <button>完了</button>
          <button>削除</button>
        </div>
        );
      })}

    </div>
  </>
  );
};

