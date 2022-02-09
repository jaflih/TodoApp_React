import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps } = props;

  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any),
  handleChangeProps: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: null,
};

export default TodoItem;
