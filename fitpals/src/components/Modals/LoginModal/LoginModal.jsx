import React from "react";
import styles from "./LoginModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const LoginModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <h1>Gratulacje, zostałeś poprawnie zalogowany !</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
