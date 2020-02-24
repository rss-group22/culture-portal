/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from "react";
import dataText from "../../data/dataText";
import dataTeam from "../../data/dataTeam";
import dataTeamLang from "../../data/dataTeamLang";
import octocatImg from "../../data/image/team/octocat.png";
import linkedinImg from "../../data/image/team/linkedin.png";

import Worklog from './Worklog/Worklog';

import "./Team.scss";

export default class Team extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div>
        <h2 className="title-team">{dataText[lang].Team.title}</h2>
        <span className="subtext-team" />
        {dataText[lang].Team.subtext}
        <p className="text-team" />
        {dataText[lang].Team.text1}
        <p className="text-team" />
        {dataText[lang].Team.text2}
        <ul className="team-list">
          {dataTeam.map(info => {
            const item = dataTeamLang[lang][info.userGitHub]
            return (
              <li className="team-item" key={info.id}>
                <div className="team-item__icons">
                  <img
                    className="team-item--avatar"
                    src={info.avatarGit}
                    alt="avatar"
                  />
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
                  <h5>{`${item.name} ${item.surname}`}</h5>
                  <ul className="team-item__skills--list">
                    <li>{`${item.skill1}`}</li>
                    <li>{`${item.skill2}`}</li>
                    <li>{`${item.skill3}`}</li>
                    <li>{`${item.skill4}`}</li>
                    <li>{`${item.skill5}`}</li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
