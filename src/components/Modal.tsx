import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/modal.module.css";

interface ModalProps {
  open: boolean;
  title: string;
  text: string;
  onOpen: (s: any) => void;
  children?: any;
}

export const Modal: FC<ModalProps> = (props) => {
  const { open, title, text, onOpen, children } = props;
  const { modal, modalContainer, btnClose } = styles;
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className={modalContainer}>
      <div className={modal}>
        <h3>{title}</h3>
        <p>{text}</p>
        <button className={btnClose} onClick={() => onOpen(false)}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
