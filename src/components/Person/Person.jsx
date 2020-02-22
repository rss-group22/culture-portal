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

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {}
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    getData().then(data => {
      const author = data.filter(item => item.id === +id)[0];
      this.setState({ author });
    });
  }

  render() {
    const { lang } = this.props;
    const { avatar, photographerName, yearsOfLife, biography, biographyTimeline } = this.state.author;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{ dataText[lang].Person.title }</h2>
            <PhotographerCard
              avatar={avatar}
              photographerName={photographerName}
              yearsOfLife={yearsOfLife}
              biography={biography}
            />
            <Slider />
            <TimelineComponent biographyTimeline={biographyTimeline} />
          </div>
        </div>
      </div>
    );
  }

}
