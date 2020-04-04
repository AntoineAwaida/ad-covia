type SimpleAnswerType = "YES_NO_UNSURE" | "NUMBER" | "STRING";

export interface Question {
  id: string;
  text: string;
  answer: { type: SimpleAnswerType } | { type: "DISCRETE_SET"; set: string[] };
}
