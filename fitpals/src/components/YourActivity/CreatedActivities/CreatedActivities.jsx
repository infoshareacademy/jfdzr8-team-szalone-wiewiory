import { db } from "../../../api/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./CreatedActivities.module.css";

export const CreatedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const fitpals = getFitpals(querySnapshot);
      setFitpals(fitpals);
    });
  }, []);

  return (
    <>
      <h2 className={styles.heading}>Aktywności utworzone przez Ciebie</h2>
      <ul>
        {fitpals.map(({ id, date, time, city, place, activity }) => (
          <li key={id} className={styles.listItem}>
            <p>Data: {date}</p>
            <p>Godzina: {time}</p>
            <p>Miasto: {city}</p>
            <p>Miejsce: {place}</p>
            <p className={styles.activity}>Aktywność: {activity}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
