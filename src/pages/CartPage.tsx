import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetReservation } from "../store/store";
import styles from "../styles/cart.module.css";

export const CartPage = () => {
  const { cartContainer, cart, title, day } = styles;
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  console.log(state);
  const getTotal = () => {
    const res = state.destinations.reservations.map((r: any) => r.schedule);
    let total = 0;
    res[0].forEach((r: any) => {
      total += r.amount * r.price;
    });
    return total;
  };
  const handleDelete = (day: string, sch: any) => {
    console.log(day, sch);
  };
  const handleDeleteAll = () => {
    dispatch(resetReservation());
  };
  if (state.destinations.reservations.length <= 0) {
    return <p>Carrito vacio</p>;
  }
  return (
    <div className={cartContainer}>
      <div className={cart}>
        <h5>Mis reservas</h5>
        <div className={title}>
          <p>Origen: {state.destinations.origin}</p>
          <p>Destino: {state.destinations.destination.city}</p>
        </div>
        <div>
          {state.destinations.reservations.map((res: any) => {
            return (
              <div key={res.day} className={day}>
                <p>{res.day}</p>
                <hr style={{ margin: "15px 0" }} />
                {res.schedule.map((s: any) => (
                  <div key={s.hour}>
                    <p>Hora de vuelo: {s.hour} hrs</p>
                    <p>Costo por boleto: $ {s.price} MXN</p>
                    <p>Numero de personas: {s.amount}</p>
                    <p>Total: $ {s.amount * s.price} MXN</p>
                    <button onClick={() => handleDelete(res.day, s)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <hr style={{ margin: "15px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontStyle: "oblique" }}>Total global:</p>
          <p>$ {getTotal()} MXN</p>
        </div>
        <div>
          <button onClick={handleDeleteAll}>Borrar todo</button>
          <button>Confirmar reserva</button>
        </div>
      </div>
    </div>
  );
};
