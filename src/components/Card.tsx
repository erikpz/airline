import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setReservation } from "../store/store";
import styles from "../styles/cards-list.module.css";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface CardProps {
  flight: any;
}

export const Card: FC<CardProps> = (props) => {
  const { card, cardRow, addCart } = styles;
  const { flight } = props;
  const [schedule, setschedule] = useState<any>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const handleAmount = (i: number, op: string) => {
    const reserv = schedule.schedule.map((s: any, ind: number) => {
      if (ind === i) {
        if (op === "+") {
          return { ...s, amount: s.amount + 1 };
        }
        if (s.amount > 0) {
          return { ...s, amount: s.amount - 1 };
        }
      }
      return s;
    });
    setschedule({ day: schedule.day, schedule: reserv });
  };

  const handdleAddCart = () => {
    const reserv = schedule.schedule.filter((s: any) => s.amount > 0);
    if (reserv.length > 0) {
      dispatch(setReservation([{ day: schedule.day, schedule: reserv }]));
      navigate("/cart");
    } else {
      setopen(true);
    }
  };

  useEffect(() => {
    if (flight) {
      const newSche = flight.schedule.map((s: any) => {
        return { ...s, amount: 0 };
      });
      setschedule({ day: flight.day, schedule: newSche });
    }
  }, [flight]);

  return (
    <div key={flight.day} className={card}>
      <p>{flight.day}</p>
      {schedule &&
        schedule.schedule.map((sch: any, i: number) => (
          <div key={sch.hour} className={cardRow}>
            <div>
              <p> Hora: {sch.hour}</p>
              <p> Precio: $ {sch.price}MXN</p>
            </div>
            <div>
              <button onClick={() => handleAmount(i, "-")}>-</button>
              <p>{sch?.amount ? sch.amount : "0"}</p>
              <button onClick={() => handleAmount(i, "+")}>+</button>
            </div>
          </div>
        ))}
      <button className={addCart} onClick={handdleAddCart}>
        Agregar al carrito
      </button>
      <Modal
        title="Operación inválida"
        text="Debes agregar al menos un boleto para reservar"
        open={open}
        onOpen={setopen}
      >
        <Button
          text="Ok"
          onClick={() => setopen(false)}
          style={{ margin: "30px auto 0 auto", width: 120 }}
        />
      </Modal>
    </div>
  );
};
