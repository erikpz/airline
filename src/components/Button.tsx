import React, { FC } from "react";
import styles from "../styles/button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: any;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { button: btn } = styles;
  const { text, onClick, style, disabled } = props;
  return (
    <button className={btn} style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
