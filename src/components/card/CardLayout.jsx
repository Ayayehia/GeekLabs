import React from "react";

const CardLayout = (props) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-[#202020] mx-7">
      {props.children}
    </div>
  );
};

export default CardLayout;
