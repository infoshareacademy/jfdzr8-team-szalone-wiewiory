import React from "react";
import styles from "./DeleteActivityModalError.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const DeleteActivityModalError = ({
  showDeleteActivityModalError,
  setShowDeleteActivityModalError,
}) => {
  const content = showDeleteActivityModalError && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowDeleteActivityModalError(false)}
      >
        X
      </button>
      <h1>Aktywność nie została usunięta. Spróbuj jeszcze raz</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
