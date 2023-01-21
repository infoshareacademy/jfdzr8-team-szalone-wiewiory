import { db } from "../../../api/firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "./FormActivities.module.css";

export const FormActivity = () => {
  const fitpalsCollection = collection(db, "FitPals");

  const getFormData = (e) => {
    const form = e.target;
    const { date, time, city, place, activity } = form;

    const fitpal = {
      date: {
        date: date.value,
        time: time.value,
      },
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
          <option value="fitness">Fitness</option>
          <option value="gym">Siłownia</option>
          <option value="swimming">Pływanie</option>
          <option value="jogging">Jogging</option>
          <option value="skating">Jazda na rolkach</option>
          <option value="cycling">Jazda na rowerze</option>
          <option value="football">Piłka nożna</option>
          <option value="basketball">Koszykówka</option>
          <option value="volleyball">Siatkówka</option>
          <option value="squash">Squash</option>
          <option value="tennis">Tenis</option>
          <option value="table-tennis">Tenis stołowy</option>
          <option value="climbing-wall">Ścianka wspinaczkowa</option>
          <option value="trekking">Trekking</option>
          <option value="boxing">Boks</option>
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
