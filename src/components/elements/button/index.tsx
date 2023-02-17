import React, { ButtonHTMLAttributes } from "react";
import "./style.css";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  typeButton?: string;
};

export default function Button({
  title,
  typeButton,
  ...rest
}: ButtonType) {
  return (
    <button className={typeButton} {...rest}>
      {title}
    </button>
  );
}