/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StyleGuide from '../StyleGuide';
import GetPhotographersData from '../../data/author-information';
import Aside from '../Aside/Aside.jsx';
import Main from '../Partial/Main.jsx';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographersData: [],
      lang: 'EN',
    };
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(value) {
    this.setState({ lang: value });
  }

  componentDidMount() {
    const service = new GetPhotographersData();
    service.getData()
      .then((res) => {
        this.setState({
          photographersData: res,
        });
      });
  }

  render() {
    return (
      <Router>
        <Route path="/styleguide/:tabName?" component={StyleGuide} />
        <div className="page">
          <Aside
            changeLang={this.changeLang}
            lang={this.state.lang}
          />
          <Main
            lang={this.state.lang}
          />
        </div>
      </Router>
    );
  }
}
