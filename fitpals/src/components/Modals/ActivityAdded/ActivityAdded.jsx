import React from "react";
import styles from "./ActivityAdded.module.css";
import Logo from "../../Logo/logo.png";

export const ActivityAdded = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <h1>Dodano aktywność do twoich FitPali !</h1>
      <img src={Logo} alt="logo of github" className={styles.logo} />
    </div>
  );

  return content;
};
