import { ADD_ARTICLE } from "../constants/types.js";
import { truncate } from "fs";
import { combineReducers } from "redux";
import { authentication } from "./auth-reducer";
import { registration } from "./registration-reducer";

const rootReducer = combineReducers({ authentication, registration });

export default rootReducer;
