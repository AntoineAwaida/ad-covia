import { Question } from "./interfaces";

export const mockQuestions: Question[] = [
  {
    id: "fievre",
    shortText: "Fièvre",
    text: "Avez-vous de la fièvre?",
    answer: { type: "YES_NO_UNSURE" },
  },
  {
    id: "anosmie",
    shortText: "Anosmie",
    text: "Avez-vous une perte de l'odorat?",
    answer: { type: "YES_NO" },
  },
];
