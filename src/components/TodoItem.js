import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const { completed, id, title } = todo;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li key={id} className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" onClick={() => deleteTodoProps(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>{title}</span>
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
