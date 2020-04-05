import { useFormik } from "formik";
import { Question } from "../../modules/questions/interfaces";
import { useState } from "react";

const generateInitialValues = (questions: Question[]) => {
  const initialValues: { [id: string]: string } = {};

  questions.forEach((question) => (initialValues[question.id] = ""));

  return initialValues;
};

export const useADForm = (questions: Question[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((currentState) =>
      Math.min(currentState + 1, questions.length - 1)
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((currentState) => Math.max(currentState - 1, 0));
  };

  const formik = useFormik({
    initialValues: generateInitialValues(questions),
    onSubmit: (values) => {
      console.warn(JSON.stringify(values));
      alert("SUBMITTED FORM, CHECK LOG TO SEE VALUES");
    },
  });

  return {
    formik,
    currentQuestionIndex,
    goToPreviousQuestion,
    goToNextQuestion,
  };
};
