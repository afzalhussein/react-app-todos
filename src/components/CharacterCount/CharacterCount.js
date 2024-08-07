import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TextContext } from "../../App";

export default function CharacterCount({ show }) {
  const { text } = useContext(TextContext);
  if (!show) {
    return null;
  }
  const characterCount = text.trim() === "" ? 0 : text.trim().length;
  return <div>Character Count: {characterCount}</div>;
}

CharacterCount.propTypes = {
  show: PropTypes.bool.isRequired,
};
