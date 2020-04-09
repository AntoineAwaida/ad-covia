import { ADCoviaAPI } from "../../lib/api";
import { Question } from "./interfaces";

export const getQuestions = (): Promise<Question[]> =>
  ADCoviaAPI("/questions").get().json();
