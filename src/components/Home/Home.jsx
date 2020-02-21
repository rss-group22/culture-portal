/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Home.scss';
import { dataText } from '../../data/dataText.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title title_bordered">{dataText[lang].Home.title}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
