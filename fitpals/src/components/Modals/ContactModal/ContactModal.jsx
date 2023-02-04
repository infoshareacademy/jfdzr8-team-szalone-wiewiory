import React from "react";
import styles from "./ContactModal.module.css";
import Logo from "../../Logo/logo2.png";

export const ContactModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <h1>Dziękujemy, wiadomość została wysłana !</h1>
      <img src={Logo} alt="logo of github" className={styles.logo} />
    </div>
  );

  return content;
};
