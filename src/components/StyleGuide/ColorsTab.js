import React from 'react';

const colors1 = ['#ffffff', '#f8f9fa', '#eeeeee', '#dee2e6', '#ced4da', '#aaaaaa', '#777777', '#495057', '#333333', '#222222', '#000000'];
const colors2 = ['#EB6864', '#6610f2', '#6f42c1', '#e83e8c', '#F57A00', '#fd7e14', '#F5E625', '#22B24C', '#20c997', '#369369'];

export default function ColorsTab() {
  return (
    <>
      <h2 className="subtitle text-center">We are used the next colors</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {
          colors1.map((color) => (
            <div className="color-block" key={`color-${color}`}>
              <div className="color" style={{ background: color }} />
              <p className="text-secondary text-center"><small>{color}</small></p>
            </div>
          ))
        }
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {
          colors2.map((color) => (
            <div className="color-block" key={`color-${color}`}>
              <div className="color" style={{ background: color }} />
              <p className="text-secondary text-center"><small>{color}</small></p>
            </div>
          ))
        }
      </div>
      <div className="jumbotron">
        <h2 className="subtitle text-center">Also you can use this colors like scss variables</h2>
        <pre>
          <code className="language-css">
            {
              `$white: #fff;\n$gray-100: #f8f9fa;\n$gray-200: #eee;\n$gray-300: #dee2e6;\n$gray-400: #ced4da;\n$gray-500: #aaa;\n$gray-600: #777;\n$gray-700: #495057;\n$gray-800: #333;\n$gray-900: #222;\n$black: #000;\n\n$blue: #EB6864;\n$indigo: #6610f2;\n$purple: #6f42c1;\n$pink: #e83e8c;\n$red: #F57A00;\n$orange: #fd7e14;\n$yellow:  #F5E625;\n$green: #22B24C;\n$teal: #20c997;\n$cyan: #369369;`
            }
          </code>
        </pre>
      </div>
    </>
  );
}
