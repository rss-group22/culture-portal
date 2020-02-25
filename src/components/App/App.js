/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StyleGuide from '../StyleGuide';
import Aside from '../Aside/Aside.jsx';
import Home from '../Home';
import Team from '../Team';
import Person from '../Person';
import Photographers from '../Photographers';
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "EN",
      id: 1,
    };
    this.changeLang = this.changeLang.bind(this);
    this.changeId = this.changeId.bind(this);
  }

  componentWillMount() {
    const id = new Date().getDay();
    this.state.id = id || 7;
  }

  changeLang(value) {
    this.setState({ lang: value });
  }

  changeId(value) {
    this.setState({ id: value});
  }

  render() {
    return (
      <Router>
        <Aside
          changeLang={this.changeLang}
          lang={this.state.lang}
          id={this.state.id}
        />
        <div id="content">
          <Route path="/" exact component={() => <Home lang={this.state.lang} changeId={this.changeId} />} />
          <Route path="/team" component={() => <Team lang={this.state.lang} />} />
          <Route path="/person/:id" component={(props) => <Person lang={this.state.lang} {...props} />} />
          <Route path="/photographers" component={() => <Photographers lang={this.state.lang} />} />
          <Route path="/styleguide/:tabName?" component={StyleGuide} />
        </div>
      </Router>
    );
  }
}
