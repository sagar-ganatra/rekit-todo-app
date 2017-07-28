import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class RecentActivity extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  renderRecentActivity () {
    const {
      recentActivity
    } = this.props.common;

    const recentActivityList = recentActivity.map((activity, index) => {
      return (
        <li key={index}>
          <span>ACTION: {activity.name} </span>
          <br />
          <span>PAYLOAD: {activity.payload}</span>
        </li>
      );
    });
    console.log(recentActivityList);
    return (
      <ul>
        {recentActivityList}
      </ul>
    );
  }

  render() {
    const {
      recentActivity
    } = this.props.common;

    if (!recentActivity.length) {
      return null;
    }

    return (
      <div className="common-recent-activity">
        {this.renderRecentActivity()}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(RecentActivity);
