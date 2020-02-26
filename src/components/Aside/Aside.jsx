/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import './Aside.scss';
import { NavLink } from 'react-router-dom';
import Language from './Language.jsx';
import dataText from '../../data/dataText.js';

export default class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lang, onClose, show } = this.props;

    return (
      <div className={`aside ${show ? 'openAside' : 'closeAside'}`}>
        <div className="aside__header d-flex justify-content-between align-items-center">
          <Language changeLang={this.props.changeLang} />
          <button className="aside__close-btn close" onClick={onClose}>&times;</button>
        </div>
        <h2 className="aside__title">{dataText[lang].Aside.title}</h2>
        <nav className="aside__nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={onClose}>{dataText[lang].Aside.nav1}</NavLink>
            </li>
            <li>
              <NavLink to={`/person/${this.props.id}`} activeClassName="active" onClick={onClose}>{dataText[lang].Aside.nav2}</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeClassName="active" onClick={onClose}>{dataText[lang].Aside.nav3}</NavLink>
            </li>
            <li>
              <NavLink to="/photographers" activeClassName="active" onClick={onClose}>{dataText[lang].Aside.nav4}</NavLink>
            </li>
          </ul>
        </nav>
        <span className="aside__footer">RSSchool ©2020 | Created by Group 22</span>
      </div>
    );
  }
}
