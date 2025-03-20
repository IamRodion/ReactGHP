import React from "react";

const Text = ({ color, string }) => {
  return (
    <div>
      <p className={`text-${color}`}>{string}</p>
    </div>
  );
};

export default Text;
