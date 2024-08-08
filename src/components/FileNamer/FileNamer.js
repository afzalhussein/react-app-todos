import React, { useState } from "react";
import "./FileNamer.css";

function FileNamer() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  };
  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            type="text"
            onBlur={() => setAlert(false)}
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setAlert(true)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setAlert(true)}
            type="button"
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              <span role="img" aria-label="allowed">
                ✅
              </span>
              alphanumeric characters are allowed
              <br />
              <span role="img" aria-label="not allowed">
                ⛔
              </span>
              * is not allowed
            </div>
          )}
        </div>
        <div>
          <button className="" onClick={validate}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileNamer;
