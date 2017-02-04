import React, { Component, PropTypes } from 'react';
import './Widgets.css';

function noop() {}

class Widgets extends Component {
  static propTypes = {
    /** Widget data structure (an array of objects having name, size and capacity attributes). */
    data: React.PropTypes.array,
    /** A callback that receives the value of a user input search filter. */
    onSearchChange: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    onSearchChange: noop,
  };

  handleSearchChange = (event) => {
    this.props.onSearchChange({ value: event.target.value });
  }

  renderResults() {
    return (
      <div>
        <input type="search" placeholder="Search..." onChange={this.handleSearchChange} />
        <table>
          <thead>
            <tr>
              <th><a href="">Name</a></th>
              <th><a href="">Size</a></th>
              <th><a href="">Capacity</a></th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(row => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.size}</td>
                <td>{row.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderNoResults() {
    return (
      <p>No Results</p>
    );
  }

  render() {
    return (
      <div className="Widgets">
        {this.props.data.length ? this.renderResults() : this.renderNoResults()}
      </div>
    );
  }
}

export default Widgets;
