import { legacy_createStore } from "redux";
import addTodoReducer from "./TodoReducer";

const Store = legacy_createStore(
   addTodoReducer,
)
export default Store;