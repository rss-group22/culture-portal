/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import PhotographerCard from '../PhotographerCard';
import dataText from '../../data/dataText';
import getData from '../../data/author-information'

import './Photographers.scss';

export default class Photographers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photographersData: [],
      term: ''
    }
    this.getNewData();
  }

  getNewData() {
    getData()
      .then((res) =>
        this.setState({
          photographersData: res
        })
      );
  };

  searchPhotographer = (event) => {
    const term = event.target.value;
    this.setState({ term });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.photographerName
        .toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {
    const { lang } = this.props;
    const { photographersData, term } = this.state;

    const photographersFound = this.search(photographersData, term);

    const elements = photographersFound.length ? photographersFound.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <div key={id} className="photographer__item">
          <PhotographerCard {...itemProps} />
        </div>
      );
    }) : null

    return (
      <div className="photographers_list col-12">
        <h2 className="title title_bordered">{dataText[lang].Photographers.title}</h2>
        <input
          type="search"
          className="form-control"
          placeholder="type of photographer name"
          value={term}
          onChange={this.searchPhotographer}
        />
        {elements}
      </div>
    );
  };
}