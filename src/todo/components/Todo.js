import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  {text}
  </li>
)
Todo.PropTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
}

export default Todo;
