import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Game from './view/Game'
import TodoList from './view/TodoList'

// ========================================

ReactDOM.render(
  (<div>
    <App />
    <Game />
    <TodoList />
  </div>),
  document.getElementById('root')
);
