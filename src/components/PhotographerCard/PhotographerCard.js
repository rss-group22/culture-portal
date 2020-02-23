/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react';
import './PhotographerCard.scss';

const PhotographerCard = ({
  avatar, photographerName, yearsOfLife, biography, placeOnMap
}) => {
  // TODO add props to necessary blocks
  return (
    <div className="photographer row">
      <div className="col-sm-4 photographer__photo">
        <img src={avatar} alt="photographer" />
        <h5 className="text-center">{placeOnMap}</h5>
      </div>
      <div className="col-sm-8">
        <h3 className="photographer__name text-center">{photographerName}</h3>
        <h5 className="photographer__years text-center">{yearsOfLife}</h5>
        <p className="photographer__info">{biography}</p>
      </div>
    </div>
  );
};

export default PhotographerCard;
