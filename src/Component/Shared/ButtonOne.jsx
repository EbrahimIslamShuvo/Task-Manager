import React from 'react';

const ButtonOne = ({ name, color, width ,text }) => {
  return (
    <div
      className=" text-center py-2 rounded cursor-pointer"
      style={{ backgroundColor: color, width: width, color: text }}
    >
      <p>{name}</p>
    </div>
  );
};

export default ButtonOne;