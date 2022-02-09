import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any),
};

TodosList.defaultProps = {
  todos: [],
};