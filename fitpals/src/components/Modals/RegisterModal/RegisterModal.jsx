import React from "react";
import styles from "./RegisterModal.module.css";

export const RegisterModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.modalClose}
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <h1>Gratulacje, zostałeś poprawnie zarejestrowany !</h1>
      </div>
    </div>
  );

  return content;
};
