import { Question } from "../modules/questions/interfaces";

interface UPDATE_QUESTIONS_ACTION {
  type: "UPDATE_QUESTIONS";
  data: Question[];
}

export type Action = UPDATE_QUESTIONS_ACTION;
