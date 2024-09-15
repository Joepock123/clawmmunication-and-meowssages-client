// components/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  const baseStyles = "py-2 px-4 rounded font-medium";

  const primaryStyles = "bg-green-600 text-white hover:bg-green-700";
  const secondaryStyles =
    "bg-white text-green-600 border border-green-600 hover:bg-green-50";

  const className = `${baseStyles} ${
    variant === "primary" ? primaryStyles : secondaryStyles
  }`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
