import React from "react";
import styles from "./ContactModal.module.css";

export const ContactModal = ({ show, setShow }) => {
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
        <h1>Dziękujemy, wiadomość została wysłana !</h1>
      </div>
    </div>
  );

  return content;
};
