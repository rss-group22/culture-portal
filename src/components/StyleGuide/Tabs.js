import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  {
    id: 0,
    name: 'Typography',
    to: '/styleguide/typography',
  },
  {
    id: 1,
    name: 'Color Pallete',
    to: '/styleguide/colors',
  },
  {
    id: 2,
    name: 'Buttons and links',
    to: '/styleguide/buttons',
  },
  {
    id: 3,
    name: 'Form components',
    to: '/styleguide/forms',
  },
];

export default function Tabs() {
  return (
    <nav>
      <ul className="nav nav-tabs justify-content-center">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              to={tab.to}
              activeClassName="active"
              className="nav-link"
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
