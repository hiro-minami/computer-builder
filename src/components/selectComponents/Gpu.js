import React, {useEffect, useContext, useState} from "react";
import {BUILD_GPU_MODEL} from "../../actions"
import AppContext from "../../contexts/AppContext";
import BrandOption from "./options/BrandOption";
import ModelOption from "./options/ModelOption";
import { URL } from "../../constants";

const Gpu = () => {
    const {state, dispatch} = useContext(AppContext);
    const [gpuList, setGpuList] = useState([]);
    const [brandList,setBrandList] = useState([]);

    useEffect(() => {fetch(URL+'gpu')
      .then(response => response.json())
        .then(data => {
            let brandList = [];
            data.forEach(obj => {
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
            });
            setBrandList(brandList);            
            setGpuList(data)})}, []);
    const selectModel = e => {
        e.preventDefault();
        dispatch({type: BUILD_GPU_MODEL, gpuList});
    }

    return (
        <div className="step2 p-2">
            <span className="h4 p-1">step2: Select your GPU</span>
            <div className="col-4 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-gpu" >
                        <option value="-">-</option>
                        {brandList.map((value, index) => <BrandOption key={index} value={value}/>)}
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