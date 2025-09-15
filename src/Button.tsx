import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
