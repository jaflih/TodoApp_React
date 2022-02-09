import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;

  return <li key={todo.id}>{todo.title}</li>;
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
