/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from "react";
import dataText from "../../data/dataText";
import dataTeam from "../../data/dataTeam";
import octocat from "../../data/image/team/octocat.png"

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
      this.setState({ dataTeamFromGit: data });
    });
  };

  render() {
    const { lang } = this.props;
    const { dataTeamFromGit } = this.state;
    return (
      <div className="container">
        <h2 className="title-team">{dataText[lang].Team.title}</h2>
        <p className="text-team" />
        {dataText[lang].Team.text}
        <ul className="team-list">
          {dataTeamFromGit.map(info => {
            const name = dataTeam.find(acc => acc.userGitHub === info.login);
            return (
              <li className="team-item" key={info.id}>
                <div className="team-item__avatar">
                  <img src={info.avatar_url} alt="avatar" />
                  <a className="team-item__avatar--link" href={info.html_url}>
                    <img src={octocat} alt="github" />
                  </a>
                </div>
                <div className="team-item__skills">
                  <span>{`${name.name} ${name.surname}`}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
