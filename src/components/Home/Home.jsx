/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Home.scss';
import dataText from '../../data/dataText.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVisible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {this.setState({titleVisible: true})}, 0);
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="home">
        <div className="with-bg">
          <CSSTransition
            in={this.state.titleVisible}
            classNames="title"
            timeout={500}
          >
            <h1>{dataText[lang].Home.title}</h1>
          </CSSTransition>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title title_bordered">
                { dataText[lang].Home.aboutPortal.title }
              </h2>
              <div className="text-block">
                {
                  dataText[lang].Home.aboutPortal.text.map(item => (<p key={item.substr(0, 4)}>{item}</p>))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
