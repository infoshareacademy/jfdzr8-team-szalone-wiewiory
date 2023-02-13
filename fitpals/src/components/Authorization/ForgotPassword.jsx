import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { getFormData } from "./getFormData";
import { Form } from "../Authorization/Form";
// import { firebaseErrors } from "../Authorization/firebaseErrors";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";
import { useState } from "react";

export const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const handlePasswordReset = (e) => {
    e.preventDefault();

    const { email } = getFormData(e);

    sendPasswordResetEmail(auth, email).catch((e) => {
      console.dir(e);
      setShow(true);
      // alert(firebaseErrors[e.code]);
    });
  };

  return (
    <>
      <Form
        submitText="Poproś o przypomnienie hasła"
        onSubmit={handlePasswordReset}
        isPasswordHidden
      />
      <RegisterModal show={show} setShow={setShow} />;
    </>
  );
};
