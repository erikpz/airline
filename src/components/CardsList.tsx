import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin, setReservation } from "../store/store";
import styles from "../styles/cards-list.module.css";
import { Card } from "./Card";

export const CardsList = () => {
  const { container } = styles;
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setReservation([]));
    dispatch(setDestination(""));
    dispatch(setOrigin(""));
  }, [dispatch]);

  return (
    <>
      <div className={container}>
        {typeof state.destinations.destination !== "object" ? (
          <p style={{ fontSize: "2rem", color: "#aaa", marginTop: 50 }}>
            Elige un destino
          </p>
        ) : (
          <>
            {state.destinations.destination.flights?.map((fli: any) => (
              <Card key={fli.day} flight={fli} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
