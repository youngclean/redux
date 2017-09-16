import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo,i) => 
    <Todo
      key={i}
      {...todo}
      onClick={ () => {onTodoClick}}
    />
    )}
  </ul>
)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//    // id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList