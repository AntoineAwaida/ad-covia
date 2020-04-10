import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { sha512 } from "js-sha512";

interface DoctorQuestions {
  userHashKey: string;
  result: string;
}

const initialValues = {
  userHashKey: "",
  result: "no",
};

export const useDoctorForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const formik = useFormik<DoctorQuestions>({
    initialValues,
    onSubmit: (values) => {
      console.warn(JSON.stringify(values));
      alert("SUBMITTED FORM, CHECK LOG TO SEE VALUES");
    },
  });

  useEffect(() => {
    formik.setFieldValue(
      "userHashKey",
      sha512(firstName + lastName + age).toString()
    );
  }, [firstName, lastName, age]);

  return {
    formik,
    firstName,
    lastName,
    age,
    setFirstName,
    setLastName,
    setAge,
  };
};
