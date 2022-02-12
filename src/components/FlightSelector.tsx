import React, { useState } from "react";
import styles from "../styles/flight-selector.module.css";
import { Button } from "./Button";
import { Select } from "./Select";

export const FlightSelector = () => {
  const { container } = styles;
  const [listOrigin, setlistOrigin] = useState<string[]>([
    "CDMX",
    "Guadalajara",
    "Monterrey",
    "Tijuana"
  ]);

  const handleSelected = (opt: any) => {
    if (opt) {
      console.log(opt);
    }
  };
  const handleSearch = () => {
    console.log("Search flights");
  };

  return (
    <div className={container}>
      <Select
        options={listOrigin}
        handleSelected={handleSelected}
        title="Desde"
        label="Origen"
      />
      <Select
        options={listOrigin}
        handleSelected={handleSelected}
        title="Hasta"
        label="Destino"
      />
      <Button text="Buscar" onClick={handleSearch} style={{maxWidth:200}} />
    </div>
  );
};
