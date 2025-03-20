import React from "react";

const ProgressBar = ({ color, progress }) => {
  return (
    <div className="progress my-1">
      <div
        className={`progress-bar bg-${color}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
