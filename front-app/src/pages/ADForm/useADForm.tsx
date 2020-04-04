import { useFormik } from "formik";
import { Question } from "../../modules/questions/interfaces";
import { mockQuestions } from "../../modules/questions/mocks";
import { useState } from "react";

const generateInitialValues = (questions: Question[]) => {
  const initialValues: { [id: string]: string } = {};

  questions.forEach((question) => (initialValues[question.id] = ""));

  return initialValues;
};

export const useADForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const formik = useFormik({
    initialValues: generateInitialValues(mockQuestions),
    onSubmit: (values) => {
      console.warn(JSON.stringify(values));
      alert("SUBMITTED FORM, CHECK LOG TO SEE VALUES");
    },
  });

  return { formik, currentQuestionIndex };
};
