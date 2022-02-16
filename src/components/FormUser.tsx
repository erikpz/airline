import React, { FC } from "react";
import styles from "../styles/form-user.module.css";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface FormUserProps {
  handleOpen: (s: any) => void;
}
export const FormUser: FC<FormUserProps> = (props) => {
  const { handleOpen } = props;
  const { form, error } = styles;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRes = (data: any) => {
    console.log(data);
    handleOpen(false);
    Swal.fire({
      title: "Reservado",
      text: "Gracias por su reserva",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => navigate("/"));
  };
  return (
    <div className={form}>
      <input
        className={clsx(errors.name && error)}
        placeholder="Nombre(s)*"
        {...register("name", { required: true })}
      />
      <input
        className={clsx(errors.lastname && error)}
        placeholder="Apellidos*"
        {...register("lastname", { required: true })}
      />
      <input
        className={clsx(errors.address && error)}
        placeholder="Domicilio*"
        {...register("address", { required: true })}
      />
      <input
        className={clsx(errors.email && error)}
        placeholder="Email*"
        {...register("email", { required: true })}
      />
      {Object.keys(errors).length > 0 && (
        <p style={{ color: "tomato", fontSize: 12 }}>Campos obligatorios*</p>
      )}
      <Button
        onClick={handleSubmit(handleRes)}
        text="Reservar"
        style={{ maxWidth: 120, margin: "15px auto", height: 50, fontSize: 15 }}
      />
    </div>
  );
};
