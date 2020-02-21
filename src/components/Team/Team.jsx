/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from "react";
import dataText from "../../data/dataText";
import dataTeam from "../../data/dataTeam";
import octocatImg from "../../data/image/team/octocat.png";
import linkedinImg from "../../data/image/team/linkedin.png"

import "./Team.scss";

export default class Team extends Component {

  render() {
    const { lang } = this.props;

    return (
      <div className="container">
        <h2 className="title-team">{dataText[lang].Team.title}</h2>
        <span className="subtext-team" />
        {dataText[lang].Team.subtext}
        <p className="text-team" />
        {dataText[lang].Team.text}
        <ul className="team-list">
          {dataTeam.map(info => {
            const name = dataTeam.find(acc => acc.userGitHub === info.userGitHub);
            return (
              <li className="team-item" key={info.id}>
                <div className="team-item__icons">
                  <img className="team-item--avatar" src={info.avatarGit} alt="avatar" />
                  <div className="team-item__social">
                    <a href={info.urlGitHub}>
                      <img src={octocatImg} alt="github" />
                    </a>
                    <a className="team-item__social" href={info.urlLinked}>
                      <img src={linkedinImg} alt="linkedin" />
                    </a>
                  </div>
                </div>
                <div className="team-item__skills">
                  <h4>{`${name.name} ${name.surname}`}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
