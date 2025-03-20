import React from "react";

const Title = ({ text, level = 1 }) => {
  const Heading = `h${level}`;

  return <Heading className={`h${level}`}>{text}</Heading>;
};

export default Title;
