import React from "react";

const MultiProgressBar = ({ progresses }) => {
  return (
    <div className="progress my-2">
      {progresses.map((progressItem, index) => (
        <div
          key={index}
          className={`progress-bar bg-${progressItem.color}`}
          role="progressbar"
          style={{ width: `${progressItem.progress}%` }}
          aria-valuenow={progressItem.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <strong>{progressItem.progress}%</strong>
        </div>
      ))}
    </div>
  );
};

export default MultiProgressBar;
