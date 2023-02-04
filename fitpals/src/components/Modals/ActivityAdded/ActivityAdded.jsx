import React from "react";
import styles from "./ActivityAdded.module.css";

export const ActivityAdded = ({ show, setShow }) => {
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
        <h1>Dodano aktywność do twoich FitPali !</h1>
      </div>
    </div>
  );

  return content;
};
