import React from "react";
import styles from "./ActivityAdded.module.css";
import Logo from "../../Images/FitPalLogo.png";
import CancelButton from "../../../Assets/cancel button.svg";
import { NavLink } from "react-router-dom";

export const ActivityAdded = ({ show, setShow }) => {
  return (
    <NavLink to="/my-fitpal">
      {show ? (
        <div className={styles.modal}>
          <button
            className={styles.modalClose}
            type="button"
            onClick={() => setShow(false)}
          >
            <img
              src={CancelButton}
              alt="cancel button"
              className={styles.cancelButton}
            />
          </button>
          <h1>Dodano aktywność do twoich FitPali !</h1>
          <img src={Logo} alt="logo of company" className={styles.logo} />
        </div>
      ) : null}
    </NavLink>
  );
};
