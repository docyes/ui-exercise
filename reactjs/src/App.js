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

  render() {
    return (
      <div className="App">
        {this.state.widgets === undefined ? <Loading /> : <Widgets data={this.state.widgets} />}
      </div>
    );
  }
}

export default App;
