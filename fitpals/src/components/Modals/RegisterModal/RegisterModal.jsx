import React from "react";
import styles from "./RegisterModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const RegisterModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <h1>Gratulacje, zostałeś poprawnie zarejestrowany !</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
