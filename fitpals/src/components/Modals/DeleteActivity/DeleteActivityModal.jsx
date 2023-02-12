import React from "react";
import styles from "./DeleteActivityModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const DeleteActivityModal = ({
  showDeleteActivityModal,
  setShowDeleteActivityModal,
}) => {
  const content = showDeleteActivityModal && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowDeleteActivityModal(false)}
      >
        X
      </button>
      <h1>Poprawnie usunięto aktywność</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
