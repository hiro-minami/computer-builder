// Libraries
import React, { useEffect, useContext, useState } from "react";
// Actions
import { BUILD_CPU_MODEL } from "../../actions"
// Components
import GeneralOption from  "./options/GeneralOption";
import ModelOption from "./options/ModelOption";
// Contexts
import AppContext from "../../contexts/AppContext";
// Constants
import { URL } from "../../constants";

const Cpu = () => {
    // Contexts
    const { state, dispatch } = useContext(AppContext);
    // State
    const [ brandList,setBrandList ] = useState([]);
    const [ cpuList, setCpuList ] = useState([]);
    // Effect
    useEffect(() => {fetch(URL+'cpu')
      .then(response => response.json())
        .then(data => {
            let brandList = [];
            data.forEach(obj => {
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
            });
            setBrandList(brandList);
            setCpuList(data)})
    }, []);
    // EventFunction
    const selectModel = e => {
        e.preventDefault();
        dispatch({type: BUILD_CPU_MODEL, cpuList});
    }
    // Render
    return (
        <div className="step1 p-2">
            <span className="h4 p-1">step1 : Select Your CPU</span>
            <div className="col-6 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-cpu">
                        <option value="-">-</option>
                        {brandList.map((value, index) => <GeneralOption key={index} value={value}/>)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-cpu">
                        {state.cpu.map((value, index) => <ModelOption key={index} value={value}/>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Cpu;