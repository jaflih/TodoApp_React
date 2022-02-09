import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;

  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      {todo.title}
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: null,
  deleteTodoProps: null,
};

export default TodoItem;
