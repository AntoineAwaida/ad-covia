import { createStore } from "redux";
import { rootReducer, initialState } from "./reducer";

export default createStore(rootReducer, initialState);
