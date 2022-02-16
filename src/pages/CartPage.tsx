import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReservation, resetReservation } from "../store/store";
import styles from "../styles/cart.module.css";

export const CartPage = () => {
  const {
    cartContainer,
    cart,
    title,
    day,
    emptyCart,
    buttonContainer,
    button,
  } = styles;
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state);
  const getTotal = () => {
    const res = state.destinations.reservations.map((r: any) => r.schedule);
    let total = 0;
    res[0].forEach((r: any) => {
      total += r.amount * r.price;
    });
    return total;
  };
  const handleDelete = (day: string, schedule: any) => {
    dispatch(deleteReservation({ day, schedule }));
  };
  const handleDeleteAll = () => {
    dispatch(resetReservation());
  };
  if (state.destinations.reservations.length <= 0) {
    return (
      <div className={emptyCart}>
        <p style={{ color: "#888", fontSize: "2rem" }}>Carrito vacio</p>
        <button onClick={() => navigate("/")} className={button}>
          Regresar
        </button>
      </div>
    );
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
        <div className={buttonContainer}>
          <button onClick={handleDeleteAll} className={button}>
            Borrar todo
          </button>
          <button className={button}>Confirmar reserva</button>
        </div>
      </div>
    </div>
  );
};
