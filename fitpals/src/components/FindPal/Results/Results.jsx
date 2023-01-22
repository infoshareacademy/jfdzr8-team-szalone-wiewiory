import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../api/firebase";
import styles from "./Results.module.css";

export const Results = () => {
  const [displayFitPals, setDisplayFitPals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");

  const getFitPals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitPals(querySnapshot);
      setDisplayFitPals(data);
    });
  }, []);

  return (
    <>
      <div className={styles.box}>
        {displayFitPals.map(({ id, activity, city, place, date, time }) => (
          <div key={id} className={styles.contentBox}>
            <p>
              <b>Aktywność:</b> {activity}
            </p>
            <p>
              <b>Miasto:</b> {city}
            </p>
            <p>
              <b>Data:</b> {date}
            </p>
            <p>
              <b>Godzina:</b> {time}
            </p>
            <p>
              <b>Miejsce:</b> {place}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
