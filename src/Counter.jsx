import React from "react";
import PropTypes from "prop-types";

const Counter = ({ value, children }) => {
  return (
    <div className="bg-gray-800 content-center rounded-lg px-5 my-3">
      <span className="text-white text-3xl ">
        {value}
        {children}
      </span>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
