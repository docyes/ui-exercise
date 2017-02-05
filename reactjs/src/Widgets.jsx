import Fuse from 'fuse.js';
import React, { Component, PropTypes } from 'react';
import widgetProptype from './proptypes/widget';
import './Widgets.css';

class Widgets extends Component {
  static propTypes = {
    /** Widget data structure. */
    data: PropTypes.arrayOf(widgetProptype),
    onDetailsClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props, context) {
    super(props, context);
    this.fuse = new Fuse(this.props.data, {
      shouldSort: false,
      keys: ['name', 'size'],
    });
    this.state = {
      data: props.data,
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  preventDefault = (event) => {
    event.preventDefault();
  }

  handleDetailsClick = (event) => {
    this.props.onDetailsClick(event.target.getAttribute('data-id'));
    event.preventDefault(event);
  }

  handleSearchChange = (event) => {
    const value = event.target.value;
    const data = value ? this.fuse.search(value) : this.props.data;
    this.setState({ data });
  }

  render() {
    return (
      <div className="Widgets">
        <div className="header">
          <h1 className="h4">Widget Listings</h1>
          <form className="form-inline" onSubmit={this.preventDefault}>
            <div className="form-group has-feedback">
              <input type="search" placeholder="Search..." className="form-control input-sm" onChange={this.handleSearchChange} ref={(input) => { this.input = input; }} />
              <span className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true" />
            </div>
          </form>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(row => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.size}</td>
                <td><a href="#details" data-id={row.name} onClick={this.handleDetailsClick}>Details</a></td>
              </tr>
            ))}
            {this.state.data.length === 0 && <tr><td colSpan="3" className="info">No Results</td></tr> }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Widgets;
