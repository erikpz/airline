import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormUser } from "../components/FormUser";
import { Modal } from "../components/Modal";
import { deleteReservation, resetReservation } from "../store/store";
import styles from "../styles/cart.module.css";

export const CartPage = () => {
  const {
    cartContainer,
    cart,
    title,
    day,
    emptyCart,
    buttonContainer
  } = styles;
  const state = useSelector((state: any) => state);
  const [openModal, setopenModal] = useState(false);
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
        <Button
          text="Regresar"
          onClick={() => navigate("/")}
          style={{ width: 120, margin: "0 auto" }}
        />
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
          <Button
            style={{ width: "120px", fontSize: 14, margin: 0 }}
            onClick={handleDeleteAll}
            text="Borrar todo"
          />
          <Button
            style={{ width: "120px", fontSize: 14, margin: 0 }}
            onClick={() => setopenModal(true)}
            text="Confirmar"
          />
        </div>
      </div>
      <Modal
        title="Confirmar reserva"
        text="Ingrese sus datos para confirmar"
        open={openModal}
        onOpen={setopenModal}
      >
        <FormUser handleOpen={setopenModal} />
      </Modal>
    </div>
  );
};
