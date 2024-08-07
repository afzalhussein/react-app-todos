import "./App.css";
import React, { createContext, useState, useMemo } from "react";
import TextInformation from "./components/TextInformation/TextInformation";
export const TextContext = createContext();
TextContext.displayName = 'TextContext';


function App() {
  const [text, setText] = useState('');

  // Memoize the context value
  const contextValue = useMemo(() => ({ text }), [text]);

  return (
    <TextContext.Provider value={contextValue}>
      <div className="wrapper">
        <label htmlFor="text">
          Add your text Here:
          <br />
          <textarea
            id="text"
            name="text"
            cols="100"
            rows="10"
            onChange={(e) => setText(e.target.value)}
          >
          </textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  );
}

export default App;
