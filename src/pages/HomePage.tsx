import React, { useEffect } from "react";
import { FlightSelector } from "../components/FlightSelector";
import styles from "../styles/home-page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../store/store";
import { CardsList } from "../components/CardsList";

export const HomePage = () => {
  const { homeContainer, portada, header } = styles;
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
  useEffect(() => {
    console.log(state);
  });
  return (
    <div className={homeContainer}>
      <div className={portada}>
        <header className={header}>
          <span>
            AEROLINEA
            <FontAwesomeIcon icon={faPlane} style={{ marginLeft: 10 }} />
          </span>
          <span style={{ marginLeft: "auto" }}>
            <FontAwesomeIcon icon={faBars} />
          </span>
          <a href="##">Clase negocios</a>
          <a href="##">Primera clase</a>
          <a href="##">Contacto</a>
        </header>
        <h1>Los mejores vuelos.</h1>
        <FlightSelector />
      </div>
      <CardsList />
    </div>
  );
};
