import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./RegisterPage.module.css";
import { db } from "../../api/firebase";
import { addDoc, collection } from "firebase/firestore";

export const RegisterPage = () => {
  const usersCollection = collection(db, "Users");

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
      const res = await addDoc(usersCollection, {
        Email: user.email,
        UUID: user.uid,
      });
      // console.log(res);
    } catch (e) {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    }
    e.target.reset();
    signOut(auth);
  };
  return (
    <form onSubmit={handleRegister} className={styles.form}>
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

      <button type="submit" className={styles.submit}>
        Zarejestruj się
      </button>
    </form>
  );
};
