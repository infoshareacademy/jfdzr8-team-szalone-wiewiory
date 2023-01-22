import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "./firebaseErrors";
import styles from "./RegisterPage.module.css";

export const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
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

      <button type="submit" className={styles.submit}>
        Zaloguj się
      </button>
    </form>
  );
};
