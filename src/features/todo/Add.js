import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Add extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {
      description: '',
      isTodoCreated: false
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo (event) {
    event.preventDefault();
    this.props.actions.add(this.state.description);
    this.setState({
      description: '',
      isTodoCreated: true
    });
  }

  handleChange (event) {
    this.setState({
      description: event.target.value,
      isTodoCreated: false
    });
  }

  generateTodoCreateMessage () {
    if (this.state.isTodoCreated) {
      return (
        <span className="success">Todo created!</span>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="todo-add">
        <form onSubmit={this.addTodo}>
          Enter Description:
          <br />
          <textarea rows="4"
                    cols="60"
                    value={this.state.description}
                    onChange={this.handleChange} />
          <br />
          <button type="submit">SUBMIT</button>
          <br />
          {this.generateTodoCreateMessage()}
        </form>
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
)(Add);
