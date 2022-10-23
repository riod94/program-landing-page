import React from "react";

const Button = (props) => {
  return (
    <div className={`solid-button-container ${props.rootClassName} `}>
      <button className="solid-button-button button">{props.button}</button>
    </div>
  );
};

export default Button;
