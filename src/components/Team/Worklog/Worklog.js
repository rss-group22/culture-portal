import React, { Component } from "react";
import shortid from "shortid";
import dataWorklog, { headersTable } from "../../../data/dataWorklog";

import "./Worklog.scss";

export default class Worklog extends Component {
  renderTableHandle() {
    return headersTable.map(header => {
      return <th key={shortid.generate()}>{header}</th>
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="worklog__title">Worklog</h1>
        {dataWorklog.map(row => {
          return (
            <>
              <h4 key={shortid.generate()} className="worklog__user">
                {`${row.name} ${row.surname}`}
              </h4>
              <table className="worklog__table">
                <tr className="worklog__header">{this.renderTableHandle()}</tr>
                <tbody>
                  {row.done.map(elem => {
                    return (
                      <tr className="worklog__rows">
                        <td>{`${elem.time} h`}</td>
                        <td>{elem.feature}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })}
      </div>
    );
  }
}
