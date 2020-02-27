/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotographerCard from "../PhotographerCard";
import dataText from "../../data/dataText";
import getData from "../../data/author-information";
import Loader from '../Loader';
import "./Photographers.scss";

export default class Photographers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographersData: [],
      term: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    this.inputRef.focus();
    getData().then(res => this.setState({ photographersData: res, isLoaded: true }));
  }

  searchPhotographer = e => this.setState({ term: e.target.value });

  search(items, term) {
    if (term.length === 0) return items;
    const name = items.filter(item => item.photographerName.toLowerCase().indexOf(term.toLowerCase()) > -1);
    const town = items.filter(item => item.location.toLowerCase().indexOf(term.toLowerCase()) > -1);
    return Array.from(new Set(name.concat(town)));
  }

  render() {
    const { lang } = this.props;
    const { photographersData, term, isLoaded } = this.state;
    const photographersFound = this.search(photographersData, term);

    const elements = photographersFound.length
      ? photographersFound.map(item => {
          const { id, ...itemProps } = item;

          return (
            <Link to={`/person/${id}`} key={id} className="photographer__item">
              <PhotographerCard {...itemProps} />
            </Link>
          );
        })
      : null;

    return (
      <div className="photographers_list col-12">
        <h2 className="title title_bordered">
          {dataText[lang].Photographers.title}
        </h2>
        <input
          ref={inputRef => (this.inputRef = inputRef)}
          type="search"
          className="form-control"
          placeholder={dataText[lang].Photographers.placeholder}
          value={term}
          onChange={this.searchPhotographer}
        />
        {!isLoaded ? <Loader /> : elements}
      </div>
    );
  }
}
