import React from 'react';

import './Aside.scss';

const AsideMobile = ({ onOpen }) => {
  return (
    <header className="header-mobile" id="header">
      <button
        type="button"
        className="header-mobile__humburger"
        onClick={onOpen}
      >
        &#9776;
      </button>
      <h2>RS-22</h2>
    </header>
  );
}

export default AsideMobile;
