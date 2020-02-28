/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Language from './Language';
import dataText from '../../data/dataText.js';
import AsideMobile from './AsideMobile';

import './Aside.scss';

export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAside: false,
    };
  }

  toggleAside = () =>
    this.setState(({ isShowAside }) => ({
      isShowAside: !isShowAside,
    }));

  render() {
    const { lang, changeLang } = this.props;
    const { isShowAside } = this.state;
    const leaderId = new Date().getDay() || 7;
    return (
      <>
        <AsideMobile onOpen={this.toggleAside} />
        <div className={`aside ${isShowAside ? 'openAside' : 'closeAside'}`}>
          <div className="aside__header d-flex justify-content-between align-items-center">
            <Language changeLang={changeLang} />
            <button
              type="button"
              className="aside__close-btn close"
              onClick={this.toggleAside}
            >
              &times;
            </button>
          </div>
          <h2 className="aside__title">{dataText[lang].Aside.title}</h2>
          <nav className="aside__nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={this.toggleAside}
                >
                  {dataText[lang].Aside.nav1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/person/${leaderId}/?leadofday=1`}
                  activeClassName="active"
                  onClick={this.toggleAside}
                >
                  {dataText[lang].Aside.nav2}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  activeClassName="active"
                  onClick={this.toggleAside}
                >
                  {dataText[lang].Aside.nav3}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/photographers"
                  activeClassName="active"
                  onClick={this.toggleAside}
                >
                  {dataText[lang].Aside.nav4}
                </NavLink>
              </li>
            </ul>
          </nav>
          <span className="aside__footer">
            RSSchool &copy;
            {new Date().getFullYear()}
            | Created by Group 22
          </span>
        </div>
      </>
    );
  }
}
