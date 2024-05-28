import React from "react";
import PropTypes from "prop-types";

const OnOffButton = ({ isRunning = false, toggleRunning }) => {
  return (
    <button
      onClick={toggleRunning}
      className={`rounded-lg my-6 p-2 ${
        isRunning ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {isRunning ? "Pause" : "Count"}
    </button>
  );
};

OnOffButton.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  toggleRunning: PropTypes.func.isRequired,
};

export default OnOffButton;
