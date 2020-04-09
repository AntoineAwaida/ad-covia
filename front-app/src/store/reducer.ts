import { Action } from "./actions";
import { Question } from "../modules/questions/interfaces";

export interface StoreState {
  questions: Question[];
}

export const initialState: StoreState = { questions: [] };

export const rootReducer = (
  state: StoreState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      return {
        ...state,
        questions: action.data,
      };
    default:
      return state;
  }
};
