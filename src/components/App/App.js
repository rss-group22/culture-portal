import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StyleGuide from "../StyleGuide";
import Aside from "../Aside/Aside";
import Home from "../Home";
import Team from "../Team";
import Person from "../Person";
import Photographers from "../Photographers";
import Worklog from "../Team/Worklog/Worklog";
import "./App.scss";

export default function App() {
  const [lang, setLang] = useState('EN');
  return (
    <Router>
      <Aside changeLang={setLang} lang={lang} />
      <div id="content">
        <Route path="/" exact component={() => <Home lang={lang} />} />
        <Route path="/team" component={() => <Team lang={lang} />} />
        <Route
          path="/person/:id"
          component={props => <Person lang={lang} {...props} />}
        />
        <Route
          path="/photographers"
          component={() => <Photographers lang={lang} />}
        />
        <Route
          path="/worklog"
          component={Worklog}
        />
        <Route
          path="/styleguide/:tabName?"
          component={StyleGuide}
        />
      </div>
    </Router>
  );
}
