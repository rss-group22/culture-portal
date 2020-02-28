import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import dataText from "../../data/dataText";
import dataTeam from "../../data/dataTeam";
import dataTeamLang from "../../data/dataTeamLang";
import octocatImg from "../../data/image/team/octocat.png";
import linkedinImg from "../../data/image/team/linkedin.png";
import "./Team.scss";

export default function Team({ lang }) {
  return (
    <div className="container">
      <h2 className="title-team">{dataText[lang].Team.title}</h2>
      <span className="subtext-team" />
      {dataText[lang].Team.subtext}
      <p className="text-team" />
      {dataText[lang].Team.text1}
      <p className="text-team" />
      {dataText[lang].Team.text2}
      <div className="log-links">
        <span className="log-links__item">
          <Link
            className="log-links__link  log-links__link--styleguide  btn btn-primary"
            to="/styleguide/typography"
          >
            Styleguide
          </Link>
        </span>
        <span className="log-links__item">
          <Link
            className="log-links__link  log-links__link--worklog  btn btn-primary"
            to="/worklog"
          >
            Worklog
          </Link>
        </span>
      </div>
      <ul className="team-list">
        {dataTeam.map(info => {
          const item = dataTeamLang[lang][info.userGitHub];
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
                  {info.urlLinked === "" ? null : (
                    <a className="team-item__social" href={info.urlLinked}>
                      <img src={linkedinImg} alt="linkedin" />
                    </a>
                  )}
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

Team.defaultProps = {
  lang: 'EN'
}

Team.propTypes = {
  lang: PropTypes.string
}
