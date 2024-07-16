import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";

const allReducers = combineReducers({
  image: imageReducer,
});

export default allReducers;
