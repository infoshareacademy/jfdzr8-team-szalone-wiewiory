import { db } from "../../../api/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./JoinedActivities.module.css";

export const JoinedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");
  const currentUser = window.localStorage.getItem("currentUser");

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitpals(querySnapshot);
      const filteredData = data.filter((element) =>
        element.joinedUsers ? element.joinedUsers.includes(currentUser) : null
      );
      setFitpals(filteredData);
    });
  }, [currentUser, fitpalsCollection]);

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
