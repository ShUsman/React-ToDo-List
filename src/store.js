import { createStore } from "redux";
import reducer from "./taskReducer";

const store = createStore(reducer);

export default store
