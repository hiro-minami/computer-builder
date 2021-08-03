import React, {useContext} from "react";
import {BUILD_CPU_MODEL} from "../../actions"
import AppContext from "../../contexts/AppContext";
import CpuOption from "./options/CpuOption";

const Cpu = () => {
    const {state, dispatch} = useContext(AppContext);

    const selectModel = e => {
        e.preventDefault();

        dispatch({type: BUILD_CPU_MODEL});

    }
    return (
        <div className="step1 p-2">
            <span className="h4 p-1">step1 : Select Your CPU</span>
            <div className="col-4 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-cpu">
                        <option value={"-"}>{"-"}</option>
                        <option value={"Intel"}>{"Intel"}</option>
                        <option value={"AMD"}>{"AMD"}</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-cpu">
                        {state.cpu.map((value, index) => <CpuOption key={index} value={value}/>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Cpu;