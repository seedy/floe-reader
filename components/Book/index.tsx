import React from "react";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};

export default Button;
