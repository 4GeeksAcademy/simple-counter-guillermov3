import React from "react";
import PropTypes from "prop-types";

const ResetButton = ({
  setUnits,
  setTens,
  setHundreds,
  setThousands,
  setTenThousands,
  setHundredThousands,
}) => {
  const resetCounter = () => {
    setUnits(0);
    setTens(0);
    setHundreds(0);
    setThousands(0);
    setTenThousands(0);
    setHundredThousands(0);
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
  setTenThousands: PropTypes.func.isRequired,
  setHundredThousands: PropTypes.func.isRequired,
};

export default ResetButton;
