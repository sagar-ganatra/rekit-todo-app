import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      searchText: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange (event) {
    this.setState({
      searchText: event.target.value
    });
  }

  onSearch (event) {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.setState({
      searchText: ''
    });
  }

  render() {
    return (
      <div className="github-search-form">
        <form onSubmit={this.onSearch}>
          <input type="search"
                 className="form-control"
                 value={this.state.searchText}
                 onChange={this.onChange} />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}
