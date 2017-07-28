import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import UserDetails from './UserDetails';
import SearchForm from './SearchForm';
import RecentActivity from '../common/RecentActivity';

export class DefaultPage extends Component {
  static propTypes = {
    github: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  onSearch (userName) {
    this.props.actions.getUser(userName);
  }

  getUserDetailsStatus () {
    const {
      getUserPending,
      getUserError
    } = this.props.github;

    if (getUserPending) {
      return (
        <span>Fetching...</span>
      );
    }

    if (getUserError) {
      return (
        <span>User not found</span>
      );
    }

    return null;
  }

  render() {
    const userDetails = this.props.github.userDetails;

    return (
      <div className="github-default-page">
        <div>
          <SearchForm onSearch={::this.onSearch} />
          {this.getUserDetailsStatus()}
          <UserDetails data={userDetails} />
        </div>
        <RecentActivity />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    github: state.github,
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
)(DefaultPage);
