import React, { FC } from "react";
import styles from "../styles/button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: any;
}

export const Button: FC<ButtonProps> = (props) => {
  const { button: btn } = styles;
  const { text, onClick, style } = props;
  return (
    <button className={btn} style={style} onClick={onClick}>
      {text}
    </button>
  );
};
