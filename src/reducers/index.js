// Libraries
import { combineReducers } from "redux";
// Reducers
import cpu from "./cpu";
import gpu from "./gpu";
import ram from "./ram";
import storage from "./storage";
import build from "./build";

export default combineReducers({cpu, gpu, ram, storage, build});