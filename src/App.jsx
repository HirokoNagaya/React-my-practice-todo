import logo from './logo.svg';
import './App.css';
import React from 'react';

export const App = () => {
  return (
  <>
    <div className="input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
        <div className="list-row">
          <ul>
          <li>あああああ</li>
          <button>完了</button>
          <button>削除</button>
          </ul>
        </div>
        <div>
          <ul>
          <li>いいいいい</li>
          <button>完了</button>
          <button>削除</button>
          </ul>
        </div>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
        <div className="list-row">
          <ul>
          <li>ううううう</li>
          <button>完了</button>
          <button>削除</button>
          </ul>
        </div>
    </div>
  </>
  );
};

