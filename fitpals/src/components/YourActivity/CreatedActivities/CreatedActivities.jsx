import { db } from "../../../api/firebase";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export const CreatedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  onSnapshot(fitpalsCollection, (querySnapshot) => {
    const fitpals = getFitpals(querySnapshot);
    setFitpals(fitpals);
  });

  return (
    <>
      <h2>Aktywności utworzone przez Ciebie</h2>
      <ul>
        {fitpals.map(({ id, date, time, city, place, activity }) => (
          <li key={id}>
            <p>Data: {date}</p>
            <p>Godzina: {time}</p>
            <p>Miasto: {city}</p>
            <p>Miejsce: {place}</p>
            <p>Aktywność: {activity}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
