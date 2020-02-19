import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from './Tabs';
import TypographyTab from './TypographyTab';
import './styleGuide.scss';

function StyleGuide () {
    return (
        <section id="styleGuide">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title text-center">Culture-Portal Styleguide</h1>
                        <h3 className="subtitle text-center">This is the styleguide for Culture Portal application</h3>
                        <Tabs />
                        <div className="tabs-content">
                            <Route path="/styleguide/typography">
                                <TypographyTab />
                            </Route>
                            <Route path="/styleguide/colors">colors</Route>
                            <Route path="/styleguide/buttons">buttons</Route>
                            <Route path="/styleguide/forms">forms</Route>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StyleGuide;