/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from "react";
import dataText from "../../data/dataText";
import dataTeam from "../../data/dataTeam";

import "./Team.scss";

export default class Team extends Component {
  state = {
    dataTeamFromGit: []
  };

  componentDidMount = () => {
    const githubUrl = "https://api.github.com/users/";
    const accountUrls = dataTeam.map(git => `${githubUrl}${git.userGitHub}`);
    const requests = accountUrls.map(url =>
      fetch(url).then(data => data.json())
    );
    Promise.all(requests).then(data => {
      console.log(data);
      this.setState({ dataTeamFromGit: data });
    });
  };

  render() {
    const { lang } = this.props;
    const { dataTeamFromGit } = this.state;
    return (
      <div>
        <h2 className="title">{dataText[lang].Team.title}</h2>
        <ul>
          {dataTeamFromGit.map(info => (
            <li key={info.id}>
              <span>{info.name}</span>
              <img src={info.avatar_url} alt="avatar" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
