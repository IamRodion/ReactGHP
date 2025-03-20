import React from "react";

const Badge = ({ text, color }) => {
  return <span className={`badge bg-${color}`}>{text}</span>;
};

export default Badge;
