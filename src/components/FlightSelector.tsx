import React, { useState } from "react";
import styles from "../styles/flight-selector.module.css";
import { Select } from "./Select";

export const FlightSelector = () => {
  const { container } = styles;
  const [listOrigin, setlistOrigin] = useState<string[]>([
    "CDMX",
    "Guadalajara",
    "Monterrey",
  ]);

  const handleSelected = (selected: any) => {
    if (selected) {
      console.log(selected);
    }
  };

  return (
    <div className={container}>
      <Select options={listOrigin} handleSelected={handleSelected} />
    </div>
  );
};
