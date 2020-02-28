import React from 'react';
import PropTypes from 'prop-types';

export default function Language({changeLang}) {
  const onChange = ({target: {value}}) => changeLang(value);

  return (
    <div className="aside__lang">
      <select onChange={onChange} className="custom-select">
        <option>EN</option>
        <option>RU</option>
        <option>BY</option>
      </select>
    </div>
  );
}

Language.defaultProps = {
  changeLang: val => (val)
}

Language.propTypes = {
  changeLang: PropTypes.func
}


