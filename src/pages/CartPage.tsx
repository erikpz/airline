import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/cart.module.css";

export const CartPage = () => {
  const { cartContainer, cart } = styles;
  const state = useSelector((state: any) => state);
  console.log(state);
  return (
    <div className={cartContainer}>
      <div className={cart}>
        <p>Mis reservas</p>
        <div>
            
        </div>
      </div>
    </div>
  );
};
