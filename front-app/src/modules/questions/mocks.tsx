import { Question } from "./interfaces";

export const mockQuestions: Question[] = [
  {
    id: "fievre",
    text: "Avez-vous de la fièvre?",
    answer: { type: "YES_NO_UNSURE" },
  },
  {
    id: "anosmie",
    text: "Avez-vous une perte de l'odorat?",
    answer: { type: "YES_NO_UNSURE" },
  },
];
