import React, { Component } from 'react';
import './App.css';
import Api from './services/api';
import Loading from './Loading';
import Widgets from './Widgets';

const api = new Api();

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    api.getWidgets().then(widgets => this.setState({ widgets }));
  }
  
  handleSearchChange = ({value}) => {
    const widgets = this.state.widgets;
    const isMatch = function(element) {
       return true;
    }
    if (widgets !== undefined) {
      var filtered = widgets.filter(isMatch);
      this.setState({ widgets: filtered });
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.widgets === undefined ? <Loading /> : <Widgets data={this.state.widgets} onSearchChange={this.handleSearchChange} />}
      </div>
    );
  }
}

export default App;
