import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    const { todo } = this.props;
    return <li key={todo.id}>{todo.title}</li>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
