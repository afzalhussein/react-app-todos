import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TextContext } from "../../App";

export default function WordCount({ show }) {
  const { text } = useContext(TextContext);

  if (!show) {
    return null;
  }

  // Improved word count logic to handle multiple spaces and edge cases
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return <div>Word Count: {wordCount}</div>;
}

WordCount.propTypes = {
  show: PropTypes.bool.isRequired,
};
