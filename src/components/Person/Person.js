import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataText from '../../data/dataText';
import PhotographerCard from '../PhotographerCard';
import getData from '../../data/author-information';
import TimelineComponent from '../TimelineComponent';
import Slider from '../Slider';
import Map from '../Map';
import Loader from '../Loader';
import BestWorks from '../BestWorks';
import authorInformationLang from '../../data/author-information-lang';

import './Person.scss';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: null,
      author: {},
      isLoaded: false,
      isLeadOfDay: false,
      lang: ''
    }
  }

  componentDidMount() {
    this.setNextAuthor(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.lang !== nextProps.lang || this.state.author.id !== nextProps.match.params.id) {
      this.setNextAuthor(nextProps);
    }
  }

  setNextAuthor = props => {
    const { id } = props.match.params;
    const params = new URLSearchParams(props.location.search);
    this.setState({ isLeadOfDay: params.get('leadofday'), isLoaded: false });
    getData()
      .then(data => {
        const author = data.filter(item => item.id === +id)[0];
        const authorLang = authorInformationLang[props.lang][id];
        this.setState(({ isLoaded }) => {
          return {
            author: { ...author, ...authorLang },
            isLoaded: !isLoaded,
            lang: props.lang
          }
        });
      });
  }

  render() {
    const { lang } = this.props;
    const { isLoaded, isLeadOfDay } = this.state;
    const {
      avatar,
      photographerName,
      yearsOfLife,
      biography,
      biographyTimeline,
      placeOnMap,
      youtubeUrl,
      listOfPhotographerWorks
    } = this.state.author;
    return !isLoaded ? (
      <Loader />
    ) : (
      <div className="container">
        <div className="row">
          <div className={`col-12 ${!isLeadOfDay ? 'without-title' : ''}`}>
            {isLeadOfDay ? (
              <h2 className="title title_bordered">
                {dataText[lang].Person.title}
              </h2>
            ) : null}
            <PhotographerCard
              avatar={avatar}
              photographerName={photographerName}
              yearsOfLife={yearsOfLife}
              biography={biography}
            />
            <h2 className="title title_bordered">
              {dataText[lang].Person.worksTitle}
            </h2>
            <Slider photoGallery={this.state.author.photoGallery} />
            <div className="container video-block">
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                  <iframe
                    className="person-video"
                    title={photographerName}
                    src={youtubeUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <BestWorks lang={lang} listOfPhotographerWorks={listOfPhotographerWorks} />
            <TimelineComponent biographyTimeline={biographyTimeline} />
            <Map placeOnMap={placeOnMap} />
          </div>
        </div>
      </div>
    );
  }
}

Person.defaultProps = {
  lang: 'EN'
}

Person.propTypes = {
  lang: PropTypes.string
}
