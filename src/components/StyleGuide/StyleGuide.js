import React, { useEffect } from 'react';
import { Route, Redirect, useParams } from 'react-router-dom';
import Prism from 'prismjs';
import Tabs from './Tabs';
import TypographyTab from './TypographyTab';
import ColorsTab from './ColorsTab';
import ButtonsTab from './ButtonsTab';
import FormsTab from './FormsTab';

import '../../../node_modules/prismjs/themes/prism-tomorrow.css';
import './styleGuide.scss';

export default function StyleGuide() {
  const params = useParams();
  useEffect(() => {
    Prism.highlightAll();
  }, [params]);
  return (
    <section id="styleGuide">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title text-center">Culture-Portal Styleguide</h1>
            <h3 className="subtitle text-center">
              This is the styleguide for Culture Portal application
            </h3>
            <Tabs />
            <div className="tabs-content">
              <Route
                path="/styleguide/typography"
                component={TypographyTab}
              />
              <Route
                path="/styleguide/colors"
                component={ColorsTab}
              />
              <Route
                path="/styleguide/buttons"
                component={ButtonsTab}
              />
              <Route
                path="/styleguide/forms"
                component={FormsTab}
              />
              <Redirect
                from="/styleguide"
                to="/styleguide/typography"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
