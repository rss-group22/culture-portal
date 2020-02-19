import React, { Fragment } from 'react';

export default function FormsTab () {
    return (
        <Fragment>
            <div className="jumbotron">
                <h2 className="subtitle text-center">Form components</h2>
                <div className="form-group">
                    <fieldset disabled="">
                        <label className="control-label" htmlFor="disabledInput">Disabled input</label>
                        <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                    </fieldset>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <fieldset disabled="">
        <label class="control-label" for="disabledInput">Disabled input</label>
        <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">
    </fieldset>
</div>`
}
                    </code>
                </pre>
                <div className="form-group">
                    <fieldset>
                        <label className="control-label" htmlFor="readOnlyInput">Readonly input</label>
                        <input className="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readOnly />
                    </fieldset>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <fieldset>
        <label class="control-label" for="readOnlyInput">Readonly input</label>
        <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly="">
    </fieldset>
</div>`
}
                    </code>
                </pre>
                <div className="form-group has-success">
                    <label className="form-control-label" htmlFor="inputSuccess1">Valid input</label>
                    <input type="text" className="form-control is-valid" id="inputValid" />
                    <div className="valid-feedback">Success! You've done it.</div>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group has-success">
    <label class="form-control-label" for="inputSuccess1">Valid input</label>
    <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
    <div class="valid-feedback">Success! You've done it.</div>
</div>`
}
                    </code>
                </pre>
                <div className="form-group has-danger">
                    <label className="form-control-label" htmlFor="inputDanger1">Invalid input</label>
                    <input type="text" className="form-control is-invalid" id="inputInvalid"/>
                    <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group has-danger">
    <label class="form-control-label" for="inputDanger1">Invalid input</label>
    <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
    <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
</div>`
}
                    </code>
                </pre>
                <div className="form-group">
                    <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Large input</label>
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge" />
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label>
    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge">
</div>`
}
                    </code>
                </pre>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Default input</label>
                    <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <label class="col-form-label" for="inputDefault">Default input</label>
    <input type="text" class="form-control" placeholder="Default input" id="inputDefault">
</div>`
}
                    </code>
                </pre>
                <div className="form-group">
                    <label className="col-form-label col-form-label-sm" htmlFor="inputSmall">Small input</label>
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <label class="col-form-label col-form-label-sm" for="inputSmall">Small input</label>
    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall">
</div>`
}
                    </code>
                </pre>
                <div className="form-group">
                    <label className="control-label">Input addons</label>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <pre>
                    <code className="language-html">
{
`<div class="form-group">
    <label class="control-label">Input addons</label>
    <div class="form-group">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>
    </div>
</div>`
}
                    </code>
                </pre>
                <fieldset>
                    <legend>Custom forms</legend>
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked />
                            <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" disabled />
                            <label className="custom-control-label" htmlFor="customRadio3">Disabled custom radio</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                            <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" disabled />
                            <label className="custom-control-label" htmlFor="customCheck2">Disabled custom checkbox</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked />
                            <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                        </div>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                            <label className="custom-control-label" htmlFor="customSwitch2">Disabled switch element</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" defaultValue="selected">
                            <option>Open this select menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text">Upload</span>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <pre>
                    <code className="language-html">
{
`<fieldset>
    <legend>Custom forms</legend>
    <div class="form-group">
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="">
            <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
        </div>
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
        </div>
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" disabled="">
            <label class="custom-control-label" for="customRadio3">Disabled custom radio</label>
        </div>
    </div>
    <div class="form-group">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" checked="">
            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
        </div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck2" disabled="">
            <label class="custom-control-label" for="customCheck2">Disabled custom checkbox</label>
        </div>
    </div>
    <div class="form-group">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="">
            <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" disabled="" id="customSwitch2">
            <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
        </div>
    </div>
    <div class="form-group">
        <select class="custom-select">
            <option selected="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="form-group">
        <div class="input-group mb-3">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02">
                <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
            </div>
            <div class="input-group-append">
                <span class="input-group-text" id="">Upload</span>
            </div>
        </div>
    </div>
</fieldset>`
}
                    </code>
                </pre>
            </div>
        </Fragment>
    );
}