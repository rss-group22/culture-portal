/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.changeLang(e.target.value);
  }

  render() {
    return (
      <div className="aside__lang">
        <select onChange={this.onChange} className="custom-select">
          <option>EN</option>
          <option>RU</option>
          <option>BY</option>
        </select>
      </div>
    );
  }
}
