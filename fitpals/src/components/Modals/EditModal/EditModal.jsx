import React from "react";
import styles from "./EditModal.module.css";
import Logo from "../../Images/FitPalLogo.png";

export const EditModal = ({ showEditModal, setShowEditModal }) => {
  const content = showEditModal && (
    <div className={styles.modal}>
      <button
        className={styles.modalClose}
        type="button"
        onClick={() => setShowEditModal(false)}
      >
        X
      </button>
      <h1>Zmiany zostały wprowadzone</h1>
      <img src={Logo} alt="logo of company" className={styles.logo} />
    </div>
  );

  return content;
};
