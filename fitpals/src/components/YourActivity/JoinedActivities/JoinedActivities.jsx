import { db, auth } from "../../../api/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import styles from "./JoinedActivities.module.css";

export const JoinedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");
  const currentUserId = auth?.currentUser?.uid;

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const handleUpdate = async (id) => {
    try {
      const docRef = doc(db, "/FitPals", id);
      const document = await getDoc(docRef);
      let filteredJoinedUsers;
      if (currentUserId) {
        filteredJoinedUsers = document
          .data()
          .joinedUsers.filter((joinedUserId) => joinedUserId !== currentUserId);

        await updateDoc(docRef, { joinedUsers: filteredJoinedUsers });
      }
    } catch (e) {
      console.error("An error occured ", e);
    }
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitpals(querySnapshot);
      const filteredData = data.filter((element) =>
        element.joinedUsers ? element.joinedUsers.includes(currentUserId) : null
      );
      setFitpals(filteredData);
    });
  }, [fitpalsCollection]);

  return (
    <>
      <h2 className={styles.heading}>Aktywności, do których dołączyłeś.</h2>
      <ul>
        {fitpals.map(({ id, date, time, city, place, activity }) => (
          <li key={id} className={styles.listItem}>
            <p>Data: {date}</p>
            <p>Godzina: {time}</p>
            <p>Miasto: {city}</p>
            <p>Miejsce: {place}</p>
            <p className={styles.activity}>Aktywność: {activity}</p>
            <button onClick={() => handleUpdate(id)}>Usuń aktywność</button>
          </li>
        ))}
      </ul>
    </>
  );
};
