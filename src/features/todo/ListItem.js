import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };

  generateButton (todo) {
    if (todo.isCompleted) {
      return (
        <button className="secondary"
                onClick={() => this.props.toggleTodo(todo)}>
          Move to Pending
        </button>
      );
    }
    return (
      <button className="primary"
              onClick={() => this.props.toggleTodo(todo)}>
        Move to Done
      </button>
    );
  }

  render() {
    const todo = this.props.todo;
    return (
      <li className="todo-list-item">
        <div className="status-description">
          Completed: {todo.isCompleted ? 'Yes' : 'No' }
          <br />
          Description: {todo.description}
          <br />
        </div>
        {this.generateButton(todo)}
      </li>
    );
  }
}
