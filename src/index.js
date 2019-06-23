import React from 'react'
import ReactDOM from 'react-dom'

import Game from './view/Game'
import TodoList from './view/TodoList'

// ========================================

ReactDOM.render(
  (<div>
    <Game />
    <TodoList />
  </div>),
  document.getElementById('root')
);
