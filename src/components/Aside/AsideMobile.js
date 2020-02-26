import React from 'react';

import './Aside.scss';

const AsideMobile = ({ onOpen }) => {
  return (
    <header className="header-mobile" id="header">
      <input type="button" className="header-mobile__humburger" value="&#9776;" onClick={onOpen} />
      <h2>Photographer of Belarus</h2>
    </header>
  );
}

export default AsideMobile;