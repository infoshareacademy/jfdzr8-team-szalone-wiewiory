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
        <input type="date" name="date" id="date" required />
        <input type="time" name="time" id="time" required />
      </div>
      <div>
        <label htmlFor="city">Podaj miasto:</label>
        <input type="text" name="city" id="city" required />
      </div>
      <div>
        <label htmlFor="place">Podaj dokładne miejsce:</label>
        <input type="text" name="place" id="place" required />
      </div>
      <div>
        <label htmlFor="activity">Wybierz rodzaj aktywności:</label>
        <select name="activity" id="activity" required>
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
      </div>
      <div>
        <input type="submit" value="Dodaj aktywność" />
      </div>
    </form>
  );
};
