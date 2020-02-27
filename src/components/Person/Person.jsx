/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import dataText from '../../data/dataText.js';
import PhotographerCard from '../PhotographerCard';
import getData from '../../data/author-information';
import TimelineComponent from '../TimelineComponent';
import Slider from '../Slider';
import Map from '../Map';
import Loader from '../Loader';
import './Person.scss';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
      isLoaded: false,
      isLeadOfDay: false
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const params = new URLSearchParams(this.props.location.search);
    params.get('leadofday') && this.setState({isLeadOfDay: true});
    getData()
      .then(data => {
        const author = data.filter(item => item.id === +id)[0];
        this.setState(({isLoaded}) => {
          return {
            author,
            isLoaded: !isLoaded
          }
        });
    });
  }

  render() {
    const { lang } = this.props;
    const { isLoaded, isLeadOfDay } = this.state;
    const { avatar, photographerName, yearsOfLife, biography, biographyTimeline, placeOnMap, youtubeUrl } = this.state.author;

    return !isLoaded ? <Loader /> : (
      <div className="container">
        <div className="row">
          <div className={`col-12 ${!isLeadOfDay ? 'without-title' : ''}`}>
            {
              isLeadOfDay ? <h2 className="title title_bordered">{dataText[lang].Person.title}</h2> : null
            }
            <PhotographerCard
              avatar={avatar}
              photographerName={photographerName}
              yearsOfLife={yearsOfLife}
              biography={biography}
            />
            <Slider photoGallery={this.state.author.photoGallery} />
            <iframe
              className="person-video"
              title={photographerName}
              src={youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <TimelineComponent biographyTimeline={biographyTimeline} />
            <Map placeOnMap={placeOnMap} />
          </div>
        </div>
      </div>
    );
  }
}
