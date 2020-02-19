import React, { Fragment } from 'react';

export default function ButtonsTab () {
    return (
        <Fragment>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Styles for buttons and links</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-link">Link</button>    
                </div>
                <pre>
                    <code className="language-html">
{
`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>`
}
                    </code>
                </pre>
                <div className="d-flex flex-wrap justify-content-around">
                    <button type="button" className="btn btn-primary disabled">Primary</button>
                    <button type="button" className="btn btn-secondary disabled">Secondary</button>
                    <button type="button" className="btn btn-success disabled">Success</button>
                    <button type="button" className="btn btn-info disabled">Info</button>
                    <button type="button" className="btn btn-warning disabled">Warning</button>
                    <button type="button" className="btn btn-danger disabled">Danger</button>
                    <button type="button" className="btn btn-link disabled">Link</button>
                </div>
                <pre>
                    <code className="language-html">
{
`<button type="button" class="btn btn-primary disabled">Primary</button>
<button type="button" class="btn btn-secondary disabled">Secondary</button>
<button type="button" class="btn btn-success disabled">Success</button>
<button type="button" class="btn btn-info disabled">Info</button>
<button type="button" class="btn btn-warning disabled">Warning</button>
<button type="button" class="btn btn-danger disabled">Danger</button>
<button type="button" class="btn btn-link disabled">Link</button>`
}
                    </code>
                </pre>
                <div className="d-flex flex-wrap justify-content-around">
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-outline-success">Success</button>
                    <button type="button" className="btn btn-outline-info">Info</button>
                    <button type="button" className="btn btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-outline-danger">Danger</button>
                </div>
                <pre>
                    <code className="language-html">
{
`<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>`
}
                    </code>
                </pre>
                <div className="d-flex flex-wrap justify-content-around">
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-primary">Default button</button>
                    <button type="button" className="btn btn-primary btn-sm">Small button</button>
                </div>
                <pre>
                    <code className="language-html">
{
`<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary">Default button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>`
}
                    </code>
                </pre>
                <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                <pre>
                    <code className="language-html">
                        {`<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>`}
                    </code>
                </pre>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Left</button>
                    <button type="button" className="btn btn-secondary">Middle</button>
                    <button type="button" className="btn btn-secondary">Right</button>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
</div>`
}
                    </code>
                </pre>
            </div>  
        </Fragment>
    );
}