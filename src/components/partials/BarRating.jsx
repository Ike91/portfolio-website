import React from "react";

const BarRating = ({ rating }) => {
  const percentage = (rating / 10) * 100;
  const barStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="bar-rating flex items-center">
      <div className="bar-outer h-2.5 bg-gray-700 rounded dark:bg-gray-700 mr-2 flex-1">
        <div
          className="bar-inner bg-yellow h-2.5 bg-yellow-500 rounded dark:bg-yellow-500"
          style={barStyle}
        ></div>
      </div>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {percentage.toFixed(1)}%
      </span>
    </div>
  );
};

export default BarRating;
