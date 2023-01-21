import { FormActivity } from "./FormActivities/FormActivities";
import { CreatedActivities } from "./CreatedActivities/CreatedActivities";
import { JoinedActivities } from "./JoinedActivities/JoinedActivities";

export const YourActivity = () => {
  return (
    <>
      <FormActivity />
      <CreatedActivities />
      <JoinedActivities />
    </>
  );
};
