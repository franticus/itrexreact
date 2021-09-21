import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./usersReducer";

export const store = createStore(usersReducer, applyMiddleware(thunk))
