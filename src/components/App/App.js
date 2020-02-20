/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Aside from '../Aside/Aside.jsx';
import Main from '../Partial/Main.jsx';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'EN',
    };
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(value) {
    this.setState({ lang: value });
  }

  render() {
    return (
      <div className="page">
        <Aside
          changeLang={this.changeLang}
          lang={this.state.lang}
        />
        <Main
          lang={this.state.lang}
        />
      </div>
    );
  }
}
