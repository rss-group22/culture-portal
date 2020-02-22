/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import PhotographerCard from '../PhotographerCard';
import dataText from '../../data/dataText';
import GetPhotographersData from '../../data/author-information'

export default class Photographers extends Component {

  service = new GetPhotographersData();

  state = {
    photographersData: []
  }

  constructor(props) {
    super(props);
    this.getNewData();
  }

  getNewData() {
    this.service
      .getData()
      .then((res) => {
        this.setState({
          photographersData: res
        });
      });
  };

  render() {
    const { lang } = this.props;
    const { photographersData } = this.state;
    return (
      <div className="photographers_list">
        <h2>{dataText[lang].Photographers.title}</h2>
        <input type="search" className="form-control" placeholder="type of photographer name" />
        <PhotographerCard data={photographersData[0]} />
      </div>
    );
  };
}