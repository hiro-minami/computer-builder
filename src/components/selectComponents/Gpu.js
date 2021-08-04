// Libraries
import React, { useEffect, useContext, useState } from "react";
// Actions
import { BUILD_GPU_MODEL } from "../../actions"
// Components
import GeneralOption from "./options/GeneralOption";
import ModelOption from "./options/ModelOption";
// Contexts
import AppContext from "../../contexts/AppContext";
// Constants
import { URL } from "../../constants";

const Gpu = () => {
    // Context
    const {state, dispatch} = useContext(AppContext);
    // State
    const [gpuList, setGpuList] = useState([]);
    const [brandList,setBrandList] = useState([]);

    // Effect
    useEffect(() => {fetch(URL+'gpu')
      .then(response => response.json())
        .then(data => {
            let brandList = [];
            data.forEach(obj => {
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
            });
            setBrandList(brandList);            
            setGpuList(data)})
    }, []);

    // EventFunction
    const selectModel = e => {
        e.preventDefault();
        dispatch({type: BUILD_GPU_MODEL, gpuList});
    }

    // Render
    return (
        <div className="step2 p-2">
            <span className="h4 p-1">step2: Select your GPU</span>
            <div className="col-6 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-gpu" >
                        <option value="-">-</option>
                        {brandList.map((value, index) => <GeneralOption key={index} value={value}/>)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-gpu">
                        {state.gpu.map((value, index) => <ModelOption key={index} value={value}/>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Gpu;