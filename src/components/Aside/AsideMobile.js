import React from 'react';
import PropTypes from 'prop-types';
import './Aside.scss';

export default function AsideMobile({ onOpen }) {
  return (
    <header className="header-mobile" id="header">
      <button type="button" className="header-mobile__humburger" onClick={onOpen}>&#9776;</button>
      <h2>RS-22</h2>
    </header>
  );
}

AsideMobile.defaultProps = {
  onOpen: () => (true)
}

AsideMobile.propTypes = {
  onOpen: PropTypes.func
}
