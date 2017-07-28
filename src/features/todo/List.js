import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ListItem from './ListItem';
import RecentActivity from '../common/RecentActivity';

export class List extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  toggleTodo (todo) {
    this.props.actions.update(todo);
  }

  renderTodoList (todoList) {
    if (!todoList.length) {
      return (
        <div>Empty</div>
      );
    }

    const todos = todoList.map(todo => {
      const toggleTodoFn = this.toggleTodo.bind(this, todo)
      return (
        <ListItem key={todo.id}
                  todo={todo}
                  toggleTodo={::this.toggleTodo} />
      )
    });

    return (
      <ul>
        {todos}
      </ul>
    );
  }

  render() {
    const {
      todo: {
        todoList
      }
    } = this.props;
    return (
      <div className="todo-list">
        {this.renderTodoList(todoList)}
        <RecentActivity />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
