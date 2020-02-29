import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import dataText from '../../data/dataText';

export default function Home({lang}) {
  const [isVisible, setIsVisible] = useState('');
  setTimeout(() => setIsVisible('visible'), 300);
  return (
    <div className="home">
      <div className="with-bg">
        <h1 className={isVisible}>{dataText[lang].Home.title}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title title_bordered">
              { dataText[lang].Home.aboutPortal.title }
            </h2>
            <div className="text-block">
              {
                dataText[lang].Home.aboutPortal.text.map(item => (<p key={item.substr(0, 4)}>{item}</p>))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  lang: 'EN'
}

Home.propTypes = {
  lang: PropTypes.string
}
