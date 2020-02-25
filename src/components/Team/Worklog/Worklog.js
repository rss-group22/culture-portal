import React, { Component } from "react";
import shortid from "shortid";
import dataWorklog, { headersTable } from "../../../data/dataWorklog";

import "./Worklog.scss";

export default class Worklog extends Component {
  renderTableHandle() {
    return headersTable.map(header => {
      return <th>{header}</th>;
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="worklog__title">Worklog</h1>
        <div className="worklog__wrapper">
          {dataWorklog.map(row => {
            return (
              <div
                key={shortid.generate()}
                className="worklog__item"
              >
                <h4 className="worklog__user">
                  {`${row.name} ${row.surname}`}
                </h4>
                <table className="worklog__table">
                  <tbody>
                    <tr className="worklog__header">
                      {this.renderTableHandle()}
                    </tr>
                    {row.done.map(elem => {
                      return (
                        <tr
                          key={shortid.generate()}
                          className="worklog__rows"
                        >
                          <td>{`${elem.time} h`}</td>
                          <td>{elem.feature}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
