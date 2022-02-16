import React from "react";
import styles from "../styles/spinner.module.css";

export const Spinner = () => {
  const { spinner } = styles;
  return <div className={spinner}></div>;
};
