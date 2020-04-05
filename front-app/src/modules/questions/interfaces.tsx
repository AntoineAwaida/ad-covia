type SimpleAnswerType = "YES_NO" | "YES_NO_UNSURE" | "NUMBER" | "STRING";

export type AnswerType =
  | { type: SimpleAnswerType }
  | { type: "DISCRETE_SET"; set: string[] };

export interface Question {
  id: string;
  shortText: string;
  text: string;
  answer: AnswerType;
}
