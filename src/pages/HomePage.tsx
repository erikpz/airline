import React from "react";
import { FlightSelector } from "../components/FlightSelector";
import styles from "../styles/home-page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
  const { homeContainer, portada, header } = styles;
  return (
    <div className={homeContainer}>
      <div className={portada}>
        <header className={header}>
          <span>AEROLINEA</span>
          <span style={{ marginLeft: "auto" }}>
            <FontAwesomeIcon icon={faBars} />
          </span>
          <a href="#">Clase negocios</a>
          <a href="#">Primera clase</a>
          <a href="#">Contacto</a>
        </header>
        <h1>Los mejores vuelos.</h1>
        <FlightSelector />
      </div>
    </div>
  );
};
