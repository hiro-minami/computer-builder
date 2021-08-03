import {combineReducers} from "redux";

import cpu from "./cpu";
import gpu from "./gpu";
import ram from "./ram";
import hdd from "./hdd";
import ssd from "./ssd";
import build from "./build";

export default combineReducers({cpu, gpu, ram, hdd, ssd, build});