import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./LoginPage.module.css";
import React, { useState } from "react";
import { LoginModal } from "../Modals/LoginModal/LoginModal";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      setShow(true);
    } catch (e) {
      alert(firebaseErrors[e.code]);
    }
  };
  return (
    <div className={styles.authBox}>
      <h2 className={styles.heading}>Zaloguj się</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Podaj e-mail:
        </label>
        <input type="email" name="email" id="email" className={styles.input} />

        <label htmlFor="password" className={styles.label}>
          Podaj hasło:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Zaloguj się
        </button>
        <NavLink to="forgotpassword" className={styles.forgotPassword}>
          Przypomnij hasło
        </NavLink>
        <LoginModal show={show} setShow={setShow} />
      </form>
    </div>
  );
};
