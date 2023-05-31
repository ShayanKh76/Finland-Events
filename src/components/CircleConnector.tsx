import React from "react";

const CircleConnector = () => {
  const circle1X = 150;
  const circle1Y = 5;
  const circle2X = 150;
  const circle2Y = 250;

  const linePath = `M${circle1X},${circle1Y} L${circle2X},${circle2Y}`;

  return (
    <svg width="100%" height="100%" viewBox="0 0 300 250">
      <circle cx={circle1X} cy={circle1Y} r={5} fill="gray" />
      <circle cx={circle2X} cy={circle2Y} r={1} fill="gray" />
      <path d={linePath} stroke="gray" strokeWidth={1} />
    </svg>
  );
};

export default CircleConnector;
