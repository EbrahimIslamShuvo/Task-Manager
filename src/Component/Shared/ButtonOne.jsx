import React from 'react';

const ButtonOne = ({ name, color, width }) => {
  return (
    <div
      className="text-white text-center py-2 rounded cursor-pointer"
      style={{ backgroundColor: color, width: width }}
    >
      <p>{name}</p>
    </div>
  );
};

export default ButtonOne;