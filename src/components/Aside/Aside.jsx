/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';
import Language from './Language.jsx';
import { dataText } from '../../data/dataText.js';

export default class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="home__aside">
        <Language
          changeLang={this.props.changeLang}
        />
        <h2>{dataText[lang].Aside.title}</h2>
        <nav>
          <ul>
            <li><Link to="/"><span>{dataText[lang].Aside.nav1}</span></Link></li>
            <li><Link to="/person"><span>{dataText[lang].Aside.nav2}</span></Link></li>
            <li><Link to="/team"><span>{dataText[lang].Aside.nav3}</span></Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
