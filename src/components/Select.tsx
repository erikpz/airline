import React, { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "../styles/select.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {
  options: any;
  handleSelected: (selected: any) => void;
}

export const Select: FC<SelectProps> = (props) => {
  const { options, handleSelected } = props;
  const { input, listContainer, inputOpen } = styles;
  const [open, setopen] = useState(false);
  const [selected, setselected] = useState<any>();
  const inp = useRef<any>();

  const handleClickOut = (event: any) => {
    if (inp.current && !inp.current.contains(event.target)) {
      setopen(false);
    }
  };

  const handleSelect = (opt: string) => {
    setselected(opt);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOut);
    return () => document.removeEventListener("click", handleClickOut);
  }, [inp]);

  useEffect(() => {
    setopen(false);
    handleSelected(selected);
  }, [selected, handleSelected]);

  return (
    <div
      className={clsx(input, open && inputOpen)}
      onClick={() => setopen(true)}
      ref={inp}
    >
      {selected ?? <p style={{ color: "#666" }}>Origen</p>}
      <FontAwesomeIcon style={{ marginLeft: "auto" }} icon={faAngleDown} />
      {open && (
        <div
          className={listContainer}
          style={{ bottom: -(options.length * 30 + 10) }}
        >
          {options.map((opt: string, ind: number) => (
            <span key={opt + ind} onClick={() => handleSelect(opt)}>
              {opt}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
