import { db } from "../../../api/firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "./FormActivities.module.css";

export const FormActivity = () => {
  const fitpalsCollection = collection(db, "FitPals");

  const getFormData = (e) => {
    const form = e.target;
    const { date, time, city, place, activity } = form;

    const fitpal = {
      date: date.value,
      time: time.value,
      city: city.value,
      place: place.value,
      activity: activity.value,
    };

    form.reset();
    return fitpal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(fitpalsCollection, getFormData(e));
  };

  return (
    <>
      <h2 className={styles.formHeading}>
        Dodaj nową aktywność - nowego FitPala
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="date" className={styles.label}>
          Podaj datę aktywności:
        </label>
        <div>
          <input
            type="date"
            name="date"
            id="date"
            required
            className={styles.input}
          />
          <input
            type="time"
            name="time"
            id="time"
            required
            className={styles.input}
          />
        </div>

        <label htmlFor="city" className={styles.label}>
          Podaj miasto:
        </label>
        <input
          type="text"
          name="city"
          id="city"
          required
          className={styles.input}
        />

        <label htmlFor="place" className={styles.label}>
          Podaj dokładne miejsce:
        </label>
        <input
          type="text"
          name="place"
          id="place"
          required
          className={styles.input}
        />

        <label htmlFor="activity" className={styles.label}>
          Wybierz rodzaj aktywności:
        </label>
        <select name="activity" id="activity" required className={styles.input}>
          <option value="Fitness">Fitness</option>
          <option value="Siłownia">Siłownia</option>
          <option value="Pływanie">Pływanie</option>
          <option value="Jogging">Jogging</option>
          <option value="Jazda na rolkach">Jazda na rolkach</option>
          <option value="Jazda na rowerze">Jazda na rowerze</option>
          <option value="Piłka nożna">Piłka nożna</option>
          <option value="Koszykówka">Koszykówka</option>
          <option value="Siatkówka">Siatkówka</option>
          <option value="Squash">Squash</option>
          <option value="Tennis">Tenis</option>
          <option value="Tenis stołowy">Tenis stołowy</option>
          <option value="Ścianka wspinaczkowa">Ścianka wspinaczkowa</option>
          <option value="Trekking">Trekking</option>
          <option value="Boks">Boks</option>
        </select>

        <input
          type="submit"
          value="Dodaj aktywność"
          className={styles.submit}
        />
      </form>
    </>
  );
};
