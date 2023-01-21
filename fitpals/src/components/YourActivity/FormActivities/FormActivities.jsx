import { db } from "../../../api/firebase";
import { addDoc, collection } from "firebase/firestore";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Podaj datę aktywności:</label>
        <input type="date" name="date" id="date" />
        <input type="time" name="time" id="time" />
      </div>
      <div>
        <label htmlFor="city">Podaj miasto:</label>
        <input type="text" name="city" id="city" />
      </div>
      <div>
        <label htmlFor="place">Podaj dokładne miejsce:</label>
        <input type="text" name="place" id="place" />
      </div>
      <div>
        <label htmlFor="activity">Wybierz rodzaj aktywności:</label>
        <select name="activity" id="activity">
          <option value="fitness">Fitnes</option>
          <option value="football">Piłka nożna</option>
          <option value="gym">Siłownia</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Dodaj aktywność" />
      </div>
    </form>
  );
};
