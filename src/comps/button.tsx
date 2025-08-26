import React from "react";
import "./Button.css";

export type PersonType = "friend" | "teacher" | "student";

const Button = ({
  children,
  personType,
  onClick,
}: {
  children: React.ReactNode;
  personType: PersonType;
  onClick?: () => void;
}) => (
  <button className={`custom-btn ${personType}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;