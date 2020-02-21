/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react';
import './PhotographerCard.scss';

const PhotographerCard = ({
  avatar, photographerName, yearsOfLife, biography,
}) => {
  // TODO add props to necessary blocks
  return (
    <div className="author row">
      <div className="col-sm-4 author__photo">
        <img src={ avatar } alt="photographer" />
      </div>
      <div className="col-sm-8">
        <h3 className="author__name text-center">{ photographerName }</h3>
        <h5 className="author__years text-center">{ yearsOfLife }</h5>
        <p className="author__info">{ biography }</p>
      </div>
    </div>
  );
};

export default PhotographerCard;
