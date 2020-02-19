import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StyleGuide from '../StyleGuide';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/styleguide/:tabName?" component={StyleGuide} />
      </Router>
    );
  }
}
