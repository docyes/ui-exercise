import React, { Component } from 'react';
import './App.css';
import Api from './services/api';
import Loading from './Loading';
import Widgets from './Widgets';
import Widget from './Widget';

const api = new Api();

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      view: 'loading',
    };
    api.getWidgets().then(widgets => this.setState({ view: 'widgets', widgets }));
  }

  handleBackClick = () => {
    this.setState({ view: 'widgets', widget: undefined });
  }

  handleDetailsClick = (value) => {
    const widget = this.state.widgets.find(element => element.name === value);
    this.setState({ view: 'widget', widget });
  }

  render() {
    return (
      <div className="App">
        {this.state.view === 'loading' && <Loading />}
        {this.state.view === 'widget' && <Widget data={this.state.widget} onBackClick={this.handleBackClick} />}
        {this.state.view === 'widgets' && <Widgets data={this.state.widgets} onDetailsClick={this.handleDetailsClick} />}
      </div>
    );
  }
}

export default App;
