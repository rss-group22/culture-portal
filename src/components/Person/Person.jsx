/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Person.scss';
import dataText from '../../data/dataText.js';

export default class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <h2>{dataText[lang].Person.title}</h2>
      </div>
    );
  }
}
