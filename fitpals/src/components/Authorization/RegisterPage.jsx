import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./RegisterPage.module.css";
import { db } from "../../api/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";

export const RegisterPage = () => {
  const usersCollection = collection(db, "Users");
  const [show, setShow] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(user);
      await addDoc(usersCollection, {
        Email: user.email,
        UUID: user.uid,
      });
    } catch (e) {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    }
    e.target.reset();
    signOut(auth);
  };
  return (
    <div className={styles.authBox}>
      <h2 className={styles.heading}>Zarejestruj się</h2>
      <form onSubmit={handleRegister} className={styles.form}>
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

        <button
          onClick={() => {
            setShow(true);
          }}
          type="submit"
          className={styles.button}
        >
          Zarejestruj się
        </button>
        <RegisterModal show={show} setShow={setShow} />
      </form>
    </div>
  );
};
