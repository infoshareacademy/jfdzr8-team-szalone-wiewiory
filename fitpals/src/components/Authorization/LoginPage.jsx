import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./RegisterPage.module.css";
import React, { useState } from "react";
import { LoginModal } from "../Modals/LoginModal/LoginModal";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((jwt) => {
        e.target.reset();
        const { uid } = jwt.user;
        window.localStorage.setItem("currentUser", uid);
        console.log(uid);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };
  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Podaj email:
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

      <button
        onClick={() => {
          setShow(true);
        }}
        type="submit"
        className={styles.submit}
      >
        Zaloguj się
      </button>
      <NavLink to="forgotpassword">Przypomnij hasło</NavLink>
      <LoginModal show={show} setShow={setShow} />
    </form>
  );
};
