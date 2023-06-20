import { legacy_createStore } from "redux";
import { TodoReducer } from "./TodoReducer";

export const store=legacy_createStore(TodoReducer)