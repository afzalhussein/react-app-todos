import React, { useEffect, useState, useCallback } from "react";
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

  // Use useCallback to memoize the event handler function
  const handleWindowClick = useCallback(() => setAlert(false), []);

  useEffect(() => {
    if ( alert ) {
      window.addEventListener( "click", handleWindowClick );
    }
    // Clean up the event listener
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, handleWindowClick, setAlert]);


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
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={ ( e ) => {
              setAlert( !alert );
              e.stopPropagation();
            } }
            type="button"
          >
            more information
          </button>
          {alert && 
            <div className="popup">
              <span role="img" aria-label="allowed">
                ✅
              </span> 
              Alphanumeric characters
              <br />
              <span role="img" aria-label="not allowed">
                ⛔
              </span>
              *
            </div>
          }
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
