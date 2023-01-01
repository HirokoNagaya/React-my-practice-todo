import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);
  return (
  <>
    <div className="input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
            {incompleteTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>
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

