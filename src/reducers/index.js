import { combineReducers } from "redux";

import cpu from "./cpu";
import gpu from "./gpu";
import ram from "./ram";
import storage from "./storage";
import result from "./result";

export default combineReducers({cpu, gpu, ram, storage, result});