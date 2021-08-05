import React, { useEffect, useContext, useState } from "react";

import { BUILD_CPU_MODEL } from "../../actions"

import GeneralOption from "./options/GeneralOption";
import ModelOption from "./options/ModelOption";

import AppContext from "../../contexts/AppContext";

import { URL } from "../../constants";

const Cpu = () => {
    const { state, dispatch } = useContext(AppContext);
    const [ brandList,setBrandList ] = useState([]);
    const [ cpuList, setCpuList ] = useState([]);
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
    const selectModel = e => {
        e.preventDefault();
        dispatch({type: BUILD_CPU_MODEL, cpuList});
    }

    return (
        <div className="step1 p-2">
            <span className="h4 p-1">step1 : Select Your CPU</span>
            <div className="col-6 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-cpu">
                        <option value="">-</option>
                        {brandList.map((value, index) => <GeneralOption key={index} value={value}/>)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-cpu">
                        <option value="">-</option>
                        {state.cpu.map((value, index) => <ModelOption key={index} value={value}/>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Cpu;