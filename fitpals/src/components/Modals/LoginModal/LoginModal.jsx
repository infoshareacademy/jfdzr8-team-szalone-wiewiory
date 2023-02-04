import React from "react";
import styles from "./LoginModal.module.css";

export const LoginModal = ({ show, setShow }) => {
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
        <h1>Gratulacje, zostałeś poprawnie zalogowany !</h1>
      </div>
    </div>
  );

  return content;
};
