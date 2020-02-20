/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import dataText from '../../data/dataText.js';

import './Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="home">
        <h2>{dataText[lang].Home.title}</h2>
      </div>
    );
  }
}
