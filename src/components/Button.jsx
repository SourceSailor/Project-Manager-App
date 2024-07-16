import React from "react";

const Button = ({ buttonText, buttonType, ...props }) => {
  return (
    <button {...props} type={buttonType}>
      {buttonText}
    </button>
  );
};

export default Button;
