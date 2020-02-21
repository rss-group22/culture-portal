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
  const image = require('../../data/image/photographer-photo/photo1.jpg');
  return (
    <div className="author">
      <img className="author-photo" src={image.default} alt="photographer" />
      <div className="author-wrapper">
        <h3 className="author-wrapper_name">Михаил Владимирович Анемподистов</h3>
        <h5 className="author-wrapper_years">16.03.1964 - 23.01.2018</h5>
        <p className="author-wrapper_info">
          Михаил Владимирович Анемподистов родился 16 марта 1964 г. в Минске в русской семье. Фамилия «Анемподистов» образовано от мужского имени «Анемподистов», которое имеется в православных святцах. В детстве Михаил мечтал стать зоологом или биологом, путешественником и искателем сокровищ. Хорошо рисовать начал в детстве - свои первые рисунки Михал размещал в своих энциклопедиях о животных, которые делал сам: делал страницы с собственно нарисованными моллюсками, другими различными животными и лично подписывал.
        </p>
      </div>
    </div>
  );
};

export default PhotographerCard;
