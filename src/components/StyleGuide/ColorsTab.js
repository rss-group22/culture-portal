import React, { Fragment } from 'react';

const colors1 = ["#ffffff", "#f8f9fa", "#eeeeee", "#dee2e6", "#ced4da", "#aaaaaa", "#777777", "#495057", "#333333", "#222222", "#000000"];
const colors2 = ["#EB6864", "#6610f2", "#6f42c1", "#e83e8c", "#F57A00", "#fd7e14", "#F5E625", "#22B24C", "#20c997", "#369369"];

export default function ColorsTab () {
    return (
        <Fragment>
            <h2 className="subtitle text-center">We are used the next colors</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    colors1.map((color, index) => {
                        return (
                            <div className="color-block" key={`color-${index}`}>
                                <div className="color" style={{background: color}}></div>
                                <p className="text-secondary text-center"><small>{color}</small></p>
                            </div>
                        );
                    })
                }
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    colors2.map((color, index) => {
                        return (
                            <div className="color-block" key={`color-${index}`}>
                                <div className="color" style={{background: color}}></div>
                                <p className="text-secondary text-center"><small>{color}</small></p>
                            </div>
                        );
                    })
                }
            </div>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Also you can use this colors like scss variables</h2>
                <pre><code className="language-css">
{
`
$white:    #fff;
$gray-100: #f8f9fa;
$gray-200: #eee;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #aaa;
$gray-600: #777;
$gray-700: #495057;
$gray-800: #333;
$gray-900: #222;
$black:    #000;

$blue:    #EB6864;
$indigo:  #6610f2;
$purple:  #6f42c1;
$pink:    #e83e8c;
$red:     #F57A00;
$orange:  #fd7e14;
$yellow:  #F5E625;
$green:   #22B24C;
$teal:    #20c997;
$cyan:    #369369;`
}
                </code></pre>
            </div>
        </Fragment>
    );
}