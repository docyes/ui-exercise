import React, { Component, PropTypes } from 'react';
import './Widgets.css';

class Widgets extends Component {
  static propTypes = {
    /** Widget data structure (an array of objects having name, size and capacity attributes). */
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: props.data,
    };
  }

  handleSearchChange = () => {
    // TODO add fuzzy search and const value = event.target.value;
    function isMatch() {
      return true;
    }
    this.setState({ data: this.state.data.filter(isMatch) });
  }

  render() {
    return (
      <div className="Widgets">
        <form className="form-inline">
          <div className="form-group">
            <input type="search" placeholder="Search..." className="form-control input-sm" onChange={this.handleSearchChange} />
          </div>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(row => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.size}</td>
                <td>{row.capacity}</td>
              </tr>
            ))}
            {this.state.data.length === 0 && <tr><td colSpan="3">No Results</td></tr> }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Widgets;
