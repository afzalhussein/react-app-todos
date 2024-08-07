import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { TextContext } from "../../App";

function CharacterMap({ show }) {
  const { text } = useContext(TextContext);
  if (!show) {
    return null;
  }

  return (
    <div>
      Character Map:{" "}
      {itemizePerformance(text).map((character) => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  );
}

CharacterMap.prototypes = {
  show: PropTypes.bool.isRequired,
};

function itemize(text) {
  const letters = text
    .split("")
    .filter((l) => l !== " ")
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1,
      };
    }, {});
  return Object.entries(letters).sort((a, b) => b[1] - a[1]);
}

function itemizePerformance(text) {
  const letters = {};

  for (const char of text) {
    if (char !== " ") {
      const letter = char.toLowerCase();
      letters[letter] = (letters[letter] || 0) + 1;
    }
  }

  return Object.entries(letters).sort((a, b) => b[1] - a[1]);
}


export default memo(CharacterMap);