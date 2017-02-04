import Fuse from 'fuse.js';
import React, { Component, PropTypes } from 'react';
import './Widgets.css';

class Widgets extends Component {
  static propTypes = {
    /** Widget data structure. */
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      capacity: PropTypes.number.isRequired,
    })),
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

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  handleSearchChange = (event) => {
    const value = event.target.value;
    const data = value ? this.fuse.search(value) : this.props.data;
    this.setState({ data });
  }

  render() {
    return (
      <div className="Widgets">
        <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input type="search" placeholder="Search..." className="form-control input-sm" onChange={this.handleSearchChange} ref={(input) => { this.input = input; }} />
          </div>
        </form>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(row => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.size}</td>
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
