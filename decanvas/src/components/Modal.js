import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ modalActive }) => {
  return (
    <div className={`${styles.popup} ${modalActive && styles.active}`}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Pick a color</h1>
      </div>
    </div>
  );
};

export default Modal;
