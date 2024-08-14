import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
const RiverInformation = lazy(() =>
  import(
    /* webpackChunkName: "RiverInformation" */ "./components/RiverInformation/RiverInformation"
  )
);

function App() {
  const [river, setRiver] = useState("nile");
  const [ show, setShow ] = useState( ( prevShow ) => !prevShow );
  
  const toggle = () => setShow( ( prevShow ) => !prevShow );
  
  const handleSetRiver = ( newRiver ) => {
    if (river !== newRiver) {
      setRiver(newRiver);
    }
  };

  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle} aria-expanded={show}>
          {show ? "Hide" : "Show"} Details
        </button>
      </div>
      <button
        onClick={() => handleSetRiver("nile")}
        aria-label="Select Nile River"
      >
        Nile
      </button>
      <button
        onClick={() => handleSetRiver("amazon")}
        aria-label="Select Amazon River"
      >
        Amazon
      </button>
      <button
        onClick={() => handleSetRiver("yangtze")}
        aria-label="Select Yangtze River"
      >
        Yangtze
      </button>
      <button
        onClick={() => handleSetRiver("mississippi")}
        aria-label="Select Mississippi River"
      >
        Mississippi
      </button>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Component</div>}>
          {show && <RiverInformation name={river} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
