import React from 'react';

export default function FormsTab() {
  return (
    <>
      <div className="jumbotron">
        <h2 className="subtitle text-center">Form components</h2>
        <div className="form-group">
          <fieldset disabled="">
            <label className="control-label" htmlFor="disabledInput">
              Disabled input
              <input
                className="form-control"
                id="disabledInput"
                type="text"
                placeholder="Disabled input here..."
                disabled
              />
            </label>
          </fieldset>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<fieldset disabled="">\n\t\t<label class="control-label" for="disabledInput">Disabled input</label>\n\t\t<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">\n\t</fieldset>\n</div>`}
          </code>
        </pre>
        <div className="form-group">
          <fieldset>
            <label className="control-label" htmlFor="readOnlyInput">
              Readonly input
              <input
                className="form-control"
                id="readOnlyInput"
                type="text"
                placeholder="Readonly input here…"
                readOnly
              />
            </label>
          </fieldset>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<fieldset>\n\t\t<label class="control-label" for="readOnlyInput">Readonly input</label>\n\t\t<input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly="">\n\t</fieldset>\n</div>`}
          </code>
        </pre>
        <div className="form-group has-success">
          <label className="form-control-label" htmlFor="inputSuccess1">
            Valid input
            <input
              type="text"
              className="form-control is-valid"
              id="inputValid"
            />
          </label>
          <div className="valid-feedback">Success! You&#39;ve done it.</div>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group has-success">\n\t<label class="form-control-label" for="inputSuccess1">Valid input</label>\n\t<input type="text" value="correct value" class="form-control is-valid" id="inputValid">\n\t<div class="valid-feedback">Success! You've done it.</div>\n</div>`}
          </code>
        </pre>
        <div className="form-group has-danger">
          <label className="form-control-label" htmlFor="inputDanger1">
            Invalid input
            <input
              type="text"
              className="form-control is-invalid"
              id="inputInvalid"
            />
          </label>
          <div className="invalid-feedback">
            Sorry, that username&#39;s taken. Try another?
          </div>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group has-danger">\n\t<label class="form-control-label" for="inputDanger1">Invalid input</label>\n\t<input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">\n\t<div class="invalid-feedback">Sorry, that username's taken. Try another?</div>\n</div>`}
          </code>
        </pre>
        <div className="form-group">
          <label
            className="col-form-label col-form-label-lg"
            htmlFor="inputLarge"
          >
            Large input
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder=".form-control-lg"
              id="inputLarge"
            />
          </label>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label>\n\t<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge">\n</div>`}
          </code>
        </pre>
        <div className="form-group">
          <label className="col-form-label" htmlFor="inputDefault">
            Default input
            <input
              type="text"
              className="form-control"
              placeholder="Default input"
              id="inputDefault"
            />
          </label>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<label class="col-form-label" for="inputDefault">Default input</label>\n\t<input type="text" class="form-control" placeholder="Default input" id="inputDefault">\n</div>`}
          </code>
        </pre>
        <div className="form-group">
          <label
            className="col-form-label col-form-label-sm"
            htmlFor="inputSmall"
          >
            Small input
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder=".form-control-sm"
              id="inputSmall"
            />
          </label>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<label class="col-form-label col-form-label-sm" for="inputSmall">Small input</label>\n\t<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall">\n</div>`}
          </code>
        </pre>
        <div className="form-group">
          <span className="control-label">Input addons</span>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
        <pre>
          <code className="language-html">
            {`<div class="form-group">\n\t<label class="control-label">Input addons</label>\n\t<div class="form-group">\n\t\t<div class="input-group mb-3">\n\t\t\t<div class="input-group-prepend">\n\t\t\t\t<span class="input-group-text">$</span>\n\t\t\t</div>\n\t\t\t<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">\n\t\t\t<div class="input-group-append">\n\t\t\t\t<span class="input-group-text">.00</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`}
          </code>
        </pre>
        <fieldset>
          <legend>Custom forms</legend>
          <div className="form-group">
            <div className="custom-control custom-radio">
              <label className="custom-control-label" htmlFor="customRadio1">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input"
                  checked
                />
                Toggle this custom radio
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label className="custom-control-label" htmlFor="customRadio2">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  className="custom-control-input"
                />
                Or toggle this other custom radio
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label className="custom-control-label" htmlFor="customRadio3">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  className="custom-control-input"
                  disabled
                />
                Disabled custom radio
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <label className="custom-control-label" htmlFor="customCheck1">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  checked
                />
                Check this custom checkbox
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <label className="custom-control-label" htmlFor="customCheck2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                  disabled
                />
                Disabled custom checkbox
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <label className="custom-control-label" htmlFor="customSwitch1">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  checked
                />
                Toggle this switch element
              </label>
            </div>
            <div className="custom-control custom-switch">
              <label className="custom-control-label" htmlFor="customSwitch2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  disabled
                  id="customSwitch2"
                />
                Disabled switch element
              </label>
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
                <label className="custom-file-label" htmlFor="inputGroupFile02">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile02"
                  />
                  Choose file
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>
          </div>
        </fieldset>
        <pre>
          <code className="language-html">
            {`<fieldset>\n\t<legend>Custom forms</legend>\n\t<div class="form-group">\n\t\t<div class="custom-control custom-radio">\n\t\t\t<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="">\n\t\t\t<label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>\n\t\t</div>\n\t\t<div class="custom-control custom-radio">\n\t\t\t<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">\n\t\t\t<label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>\n\t\t</div>\n\t\t<div class="custom-control custom-radio">\n\t\t\t<input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" disabled="">\n\t\t\t<label class="custom-control-label" for="customRadio3">Disabled custom radio</label>\n\t\t</div>\n\t</div>\n\t<div class="form-group">\n\t\t<div class="custom-control custom-checkbox">\n\t\t\t
            <input type="checkbox" class="custom-control-input" id="customCheck1" checked="">\n\t\t\t<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>\n\t\t</div>\n\t\t<div class="custom-control custom-checkbox">\n\t\t\t<input type="checkbox" class="custom-control-input" id="customCheck2" disabled="">\n\t\t\t<label class="custom-control-label" for="customCheck2">Disabled custom checkbox</label>\n\t\t</div>\n\t</div>\n\t<div class="form-group">\n\t\t<div class="custom-control custom-switch">\n\t\t\t<input type="checkbox" class="custom-control-input" id="customSwitch1" checked="">\n\t\t\t<label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>\n\t\t</div>\n\t\t<div class="custom-control custom-switch">\n\t\t\t<input type="checkbox" class="custom-control-input" disabled="" id="customSwitch2">\n\t\t\t<label class="custom-control-label" for="customSwitch2">Disabled switch element</label>\n\t\t</div>\n\t</div>\n\t<div class="form-group">\n\t\t<select class="custom-select">\n\t\t\t<option selected="">Open this select menu</option>\n\t\t\t<option value="1">One</option>\n\t\t\t<option value="2">Two</option>\n\t\t\t<option value="3">Three</option>\n\t\t</select>\n\t</div>\n\t<div class="form-group">\n\t\t<div class="input-group mb-3">\n\t\t\t<div class="custom-file">\n\t\t\t\t<input type="file" class="custom-file-input" id="inputGroupFile02">\n\t\t\t\t<label class="custom-file-label" for="inputGroupFile02">Choose file</label>\n\t\t\t</div>\n\t\t\t<div class="input-group-append">\n\t\t\t\t<span class="input-group-text" id="">Upload</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</fieldset>`}
          </code>
        </pre>
      </div>
    </>
  );
}
