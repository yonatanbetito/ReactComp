import React from "react";
import "./Button.css";

export type PersonType = "friend" | "teacher" | "student";

type ButtonProps = {
  children: React.ReactNode;
  personType: PersonType;
  onClick?: () => void;
};

function Button({ children, personType, onClick }: ButtonProps) {
  return (
    <button className={`custom-btn ${personType}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;