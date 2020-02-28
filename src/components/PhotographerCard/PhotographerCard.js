/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react';

import './PhotographerCard.scss';

const PhotographerCard = ({
  avatar,
  photographerName,
  year,
  biography,
  location,
}) => {
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

export default PhotographerCard;
