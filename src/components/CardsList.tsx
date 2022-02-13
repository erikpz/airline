import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/cards-list.module.css";

export const CardsList = () => {
  const { container, card, cardRow } = styles;
  const state = useSelector((state: any) => state);
  return (
    <>
      <div className={container}>
        {typeof state.destinations.destination !== "object" ? (
          <p>Elige destino</p>
        ) : (
          <>
            {state.destinations.destination.flights.map((fli: any) => (
              <div key={fli.day} className={card}>
                <p>{fli.day}</p>
                {fli.schedule.map((sch: any) => (
                  <div key={sch.hour} className={cardRow}>
                    <p> Hora: {sch.hour}</p>
                    <p> Precio: ${sch.price}MXN</p>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
