import React from "react";
import styles from "./CancelEditModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const CancelEditModal = ({
  showCancelEditModal,
  setShowCancelEditModal,
}) => {
  const content = showCancelEditModal && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowCancelEditModal(false)}
      >
        X
      </button>
      <h1>Anulowano edycję wybranej aktywności</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
