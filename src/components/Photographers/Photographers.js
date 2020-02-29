import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import PhotographerCard from "../PhotographerCard";
import dataText from "../../data/dataText";
import getData from "../../data/author-information";
import Loader from '../Loader';
import authorInformationLang from "../../data/author-information-lang";
import "./Photographers.scss";

export default class Photographers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographersData: [],
      term: '',
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.inputRef.focus();
    getData()
      .then(res => this.setState(prevState => ({
        photographersData: res,
        isLoaded: !prevState.isLoaded
      })))
  }

  searchPhotographer = ({target: { value }}) => this.setState({ term: value });

  search(data, term, langData) {
    if (term.length === 0) return data;

    const name = data.filter(
      item =>
        langData[item.id].photographerName.toLowerCase().indexOf(term.toLowerCase()) > -1,
    );

    const town = data.filter(
      item =>
        langData[item.id].location.toLowerCase().indexOf(term.toLowerCase()) > -1,
    );
    return Array.from(new Set(name.concat(town)));
  }

  render() {
    const { lang } = this.props;
    const { term, isLoaded, photographersData } = this.state;
    const photographersFound = this.search(photographersData, term, authorInformationLang[lang]);

    const elements = photographersFound.length
      ? photographersFound.map(photographer => {
        const { id, avatar, yearsOfLife } = photographer;
        const photographerLang = authorInformationLang[lang][photographer.id];

        return (
          <Link to={`/person/${id}`} key={id} className="photographer__item">
            <PhotographerCard
              avatar={avatar}
              year={yearsOfLife}
              photographerName={photographerLang.photographerName}
              biography={photographerLang.biography}
              location={photographerLang.location}
            />
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
          placeholder={dataText[lang].Photographers.search}
          value={term}
          onChange={this.searchPhotographer}
        />
        {!isLoaded ? <Loader /> : elements}
      </div>
    );
  }
}

Photographers.defaultProps = {
  lang: 'EN'
}

Photographers.propTypes = {
  lang: PropTypes.string
}
