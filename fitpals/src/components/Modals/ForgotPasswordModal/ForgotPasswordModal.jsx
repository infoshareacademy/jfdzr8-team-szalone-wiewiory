import React from "react";
import styles from "./ForgotPasswordModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const ForgotPasswordModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <h1>Za chwilę otrzymasz maila do resetu hasła !</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
