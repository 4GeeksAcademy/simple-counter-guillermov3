import React from "react";
import PropTypes from "prop-types";

const ResetButton = ({
  setUnits,
  setTens,
  setHundreds,
  setThousands,
  setMillions,
  setTenMillions,
}) => {
  const resetCounter = () => {
    console.log("reset")
    setUnits(0);
    setTens(0);
    setHundreds(0);
    setThousands(0);
    setMillions(0);
    setTenMillions(0);
  };

  return (
    <button onClick={resetCounter} className="bg-slate-200 rounded-lg my-6 p-2">
      Reset
    </button>
  );
};

ResetButton.propTypes = {
  setUnits: PropTypes.func.isRequired,
  setTens: PropTypes.func.isRequired,
  setHundreds: PropTypes.func.isRequired,
  setThousands: PropTypes.func.isRequired,
  setMillions: PropTypes.func.isRequired,
  setTenMillions: PropTypes.func.isRequired,
};

export default ResetButton;
