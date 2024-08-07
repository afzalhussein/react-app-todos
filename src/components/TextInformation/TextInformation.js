import React, { useReducer } from "react";
import CharacterCount from "../CharacterCount/CharacterCount";
import WordCount from "../WordCount/WordCount";
import CharacterMap from "../CharacterMap/CharacterMap";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHARACTER_COUNT":
      return { ...state, characterCount: !state.characterCount };
    case "TOGGLE_WORD_COUNT":
      return { ...state, wordCount: !state.wordCount };
    case "TOGGLE_CHARACTER_MAP":
      return { ...state, characterMap: !state.characterMap };
    default:
      return state;
  }
};

export default function TextInformation() {
  const [tabs, toggleTabs] = useReducer(reducer, {
    characterCount: true,
    wordCount: true,
    characterMap: true,
  });

  return (
    <div>
      <button onClick={() => toggleTabs({ type: "TOGGLE_CHARACTER_COUNT" })}>
        Character Count
      </button>
      <button onClick={() => toggleTabs({ type: "TOGGLE_WORD_COUNT" })}>
        Word Count
      </button>
      <button onClick={() => toggleTabs({ type: "TOGGLE_CHARACTER_MAP" })}>
        Character Map
      </button>
      <div>
        {tabs.characterCount && <div>Character Count Content</div>}
        {tabs.wordCount && <div>Word Count Content</div>}
        {tabs.characterMap && <div>Character Map Content</div>}
        <CharacterCount show={tabs.characterCount} />
        <WordCount show={tabs.wordCount} />
        <CharacterMap show={tabs.characterMap} />
      </div>
    </div>
  );
}
