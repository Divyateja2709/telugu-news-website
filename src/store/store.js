import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
///// this is where u got a mistake
