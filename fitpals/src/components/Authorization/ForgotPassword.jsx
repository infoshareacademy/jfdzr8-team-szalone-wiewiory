import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { getFormData } from "./getFormData";
import { Form } from "../Authorization/Form";
import { firebaseErrors } from "../Authorization/firebaseErrors";

export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();

    const { email } = getFormData(e);

    sendPasswordResetEmail(auth, email).catch((e) => {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    });
  };

  return (
    <Form
      submitText="Poproś o przypomnienie hasła"
      onSubmit={handlePasswordReset}
      isPasswordHidden
    />
  );
};
