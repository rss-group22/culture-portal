/* eslint-disable no-nested-ternary */
import React from 'react';

const BestWorks = ({listOfPhotographerWorks, lang}) => {
  const message = (lang === 'EN') ? 'List of works:' :
                  (lang === 'RU') ? 'Список работ:' :
                  'Спіс работ:';
  return (
    <>
      <h3>{message}</h3>
      <table className="table table-hover">
        <tbody>
          {
            listOfPhotographerWorks.map(({year, label}) => {
              return (
                <tr key={year}>
                  <th scope="row">{year}</th>
                  <td>{label}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default BestWorks;
