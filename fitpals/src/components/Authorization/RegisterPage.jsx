import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./RegisterPage.module.css";

export const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const getFormData = (e) => {
      const form = e.target;
      const { email, password } = form;

      const formData = {
        email: email.value,
        password: password.value,
      };

      return formData;
    };

    const { email, password } = getFormData(e);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        e.target.reset();
        signOut(auth);
      })
      .catch((e) => {
        alert(firebaseErrors[e.code]);
      });
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

      <input type="submit" value="Zarejestruj się" className={styles.submit} />
    </form>
  );
};
