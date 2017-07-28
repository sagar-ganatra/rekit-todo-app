import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class UserDetails extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const data = this.props.data;

    if (_.isEmpty(data)) {
      return null;
    }

    return (
      <div className="github-user-details">
        <div className="image-container">
          <img src={data.avatar_url}
               alt={data.name}
               width="150"
               height="150" />
        </div>
        <div className="details-container">
          <span>{data.login}</span>
          <span>{data.name}</span>
          <span>{data.company}</span>
          <span>{data.location}</span>
        </div>
      </div>
    );
  }
}
