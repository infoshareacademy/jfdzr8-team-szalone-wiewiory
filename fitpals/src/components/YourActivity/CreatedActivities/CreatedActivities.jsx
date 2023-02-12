import { db, auth } from "../../../api/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import Activity from "./Activity";
import styles from "./CreatedActivities.module.css";

export const CreatedActivities = () => {
  const [fitpals, setFitpals] = useState([]);
  const fitpalsCollection = collection(db, "FitPals");
  const currentUserId = auth?.currentUser?.uid;

  const getFitpals = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const handleUpdate = async (id, updatedFitpal) => {
    try {
      const docRef = doc(db, "/FitPals", id);
      const document = await getDoc(docRef);

      const updatedDocument = { ...document.data(), ...updatedFitpal };

      if (currentUserId) {
        await updateDoc(docRef, updatedDocument);
      }
    } catch (e) {
      console.error("An error occured ", e);
    }
  };

  const handleDelete = (id) => {
    const docRef = doc(db, "FitPals", id);
    deleteDoc(docRef);
    alert("Czy chcesz aby Twoja aktywność została usunięta?");
  };

  useEffect(() => {
    onSnapshot(fitpalsCollection, (querySnapshot) => {
      const data = getFitpals(querySnapshot);
      const filteredData = data.filter(
        (element) => element.creator === currentUserId
      );
      setFitpals(filteredData);
    });
  }, [currentUserId]);

  return (
    <>
      <h2 className={styles.heading}>Aktywności utworzone przez Ciebie</h2>
      <ul>
        {fitpals.map(({ id, date, time, city, place, activity }) => (
          <li key={id} className={styles.listItem}>
            <Activity
              date={date}
              time={time}
              city={city}
              place={place}
              activity={activity}
              activityId={id}
              deleteActivity={handleDelete}
              updateFitPal={handleUpdate}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
