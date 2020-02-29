import React from 'react';
import PropTypes from 'prop-types';
import './PhotographerCard.scss';

export default function PhotographerCard({
  avatar, photographerName, year, biography, location
}) {
  return (
    <div className="photographer row">
      <div className="col-md-3 photographer__photo">
        <img src={avatar} alt="photographer" />
        <h5 className="text-center">{location}</h5>
      </div>
      <div className="col-md-9">
        <h3 className="photographer__name text-center">{photographerName}</h3>
        <h5 className="photographer__years text-center">{year}</h5>
        <p className="photographer__info">{biography}</p>
      </div>
    </div>
  );
};

PhotographerCard.defaultProps = {
  avatar: '',
  photographerName: '',
  year: '',
  biography: '',
  location: ''
}

PhotographerCard.propTypes = {
  avatar: PropTypes.string,
  photographerName: PropTypes.string,
  year: PropTypes.string,
  biography: PropTypes.string,
  location: PropTypes.string
}
