import { ADCoviaAPI } from "../../lib/api";

export const getQuestions = () => ADCoviaAPI("/questions").get().json();