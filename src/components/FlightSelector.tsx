import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../store/store";
import styles from "../styles/flight-selector.module.css";
import { Button } from "./Button";
import { Select } from "./Select";

export const FlightSelector = () => {
  const { container } = styles;
  const listOrigin = ["CDMX", "Guadalajara", "Monterrey", "Tijuana"];
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const getDestList = () => {
    return state.destinations.cities.map((d: any) => d.city);
  };

  const handleOriginSelected = (opt: any) => {
    if (opt) dispatch(setOrigin(opt));
  };

  const handleDestinationSelected = (opt: any) => {
    if (opt) dispatch(setDestination(opt));
  };

  const handleSearch = () => {
    if (state.destinations.origin && state.destinations.destination) {
      if (typeof state.destinations.destination === "string") {
        const dest = state.destinations.cities.find(
          (c: any) => c.city === state.destinations.destination
        );
        dispatch(setDestination(dest));
      }
    }
  };

  return (
    <div className={container}>
      <Select
        options={listOrigin}
        handleSelected={handleOriginSelected}
        title="Desde"
        label="Origen"
      />
      <Select
        options={getDestList()}
        handleSelected={handleDestinationSelected}
        title="Hasta"
        label="Destino"
      />
      <Button text="Buscar" onClick={handleSearch} style={{ maxWidth: 200 }} />
    </div>
  );
};
