import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf,
};

TodosList.defaultProps = {
  todos: [],
};
