/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Team.scss';
import { dataText } from '../../data/dataText.js';

export default class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <h2>{dataText[lang].Team.title}</h2>
      </div>
    );
  }
}
