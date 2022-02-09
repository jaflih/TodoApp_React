import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;

  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => console.log('clicked')} />
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any),
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
