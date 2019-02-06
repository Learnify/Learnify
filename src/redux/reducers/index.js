import { ADD_ARTICLE } from "../constants/types.js";
import { truncate } from "fs";
import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import { registration } from "./registration-reducer";

const rootReducer = combineReducers(authReducer, registration);

export default rootReducer;
