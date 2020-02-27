/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StyleGuide from "../StyleGuide";
import Aside from "../Aside/Aside.jsx";
import Home from "../Home";
import Team from "../Team";
import Person from "../Person";
import Photographers from "../Photographers";
import Worklog from "../Team/Worklog/Worklog";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "EN",
      showAside: false
    };
  }

  changeLang = value => this.setState({ lang: value });

  render() {
    return (
      <Router>
        <Aside changeLang={this.changeLang} lang={this.state.lang} />
        <div id="content">
          <Route
            path="/"
            exact
            component={() => (
              <Home lang={this.state.lang} />
            )}
          />
          <Route
            path="/team"
            component={() => <Team lang={this.state.lang} />}
          />
          <Route
            path="/person/:id"
            component={props => <Person lang={this.state.lang} {...props} />}
          />
          <Route
            path="/photographers"
            component={() => <Photographers lang={this.state.lang} />}
          />
          <Route path="/worklog" component={Worklog} />
          <Route path="/styleguide/:tabName?" component={StyleGuide} />
        </div>
      </Router>
    );
  }
}
