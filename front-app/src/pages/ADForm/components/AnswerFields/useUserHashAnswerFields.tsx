import { useState, useEffect } from "react";
import sha512 from "js-sha512";

export const useUserHashAnswerFields = (
  questionId: string,
  setFieldValue: (field: string, value: string) => void
) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    setFieldValue(
      questionId,
      sha512.sha512(firstName + lastName + age).toString()
    );
  }, [firstName, lastName, age]);

  return { firstName, lastName, age, setFirstName, setLastName, setAge };
};
