/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.scss';
import Team from '../Team/Team.jsx';
import Home from '../Home/Home.jsx';
import Person from '../Person/Person.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home lang={this.props.lang} />} />
          <Route path="/person" render={() => <Person lang={this.props.lang} />} />
          <Route path="/team" render={() => <Team lang={this.props.lang} />} />
        </Switch>
      </main>
    );
  }
}
