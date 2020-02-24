import React, { Component } from "react";
import dataWorklog, { headersTable } from "../../../data/dataWorklog";

export default class Worklog extends Component {
  renderTableHandle() {
    return headersTable.map(header => {
      return <th key={header}>{header}</th>;
    });
  }

  render() {
    return (
      <>
        <h1 className="worklog__title">Worklog</h1>
        {dataWorklog.map((row) => {
          const key = 0;
          const {
            name,
            surname,
            time1,
            feature1,
            time2,
            feature2,
            time3,
            feature3,
            time4,
            feature4,
            time5,
            feature5,
            time6,
            feature6,
            time7,
            feature7
          } = row;
          return (
            <>
              <table className="worklog__table">
                <tbody>
                  <h4>{`${name} ${surname}`}</h4>
                  <tr>{this.renderTableHandle()}</tr>
                  <tr key={key + 1}>
                    <td>{time1}</td>
                    <td>{feature1}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time2}</td>
                    <td>{feature2}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time3}</td>
                    <td>{feature3}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time4}</td>
                    <td>{feature4}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time5}</td>
                    <td>{feature5}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time6}</td>
                    <td>{feature6}</td>
                  </tr>
                  <tr key={key + 1}>
                    <td>{time7}</td>
                    <td>{feature7}</td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </>
    );
  }
}
