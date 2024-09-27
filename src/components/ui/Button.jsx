import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  backgroundColor,
  className = "",
}) => {
  return (
    <Link
      to="/contact"
      className={`px-5 py-2 rounded-xl font-semibold ${className}`}
      style={{ backgroundColor }}
    >
      <button>{label}</button>
    </Link>
  );
};

export default Button;
