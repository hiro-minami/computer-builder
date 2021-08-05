import React, { useEffect, useContext, useState } from "react";

import { BUILD_RAM_MODEL } from "../../actions"

import GeneralOption from "./options/GeneralOption";
import ModelOption from "./options/ModelOption";

import AppContext from "../../contexts/AppContext";

import { URL } from "../../constants";

const Ram = () => {
    const { state, dispatch } = useContext(AppContext);
    const [ ramList, setRamList ] = useState([]);
    const [ amountList,setAmountList ] = useState([]);
    const [ brandList,setBrandList ] = useState([]);

    useEffect(() => {fetch(URL+'ram')
      .then(response => response.json())
        .then(data => {
            let brandList = [];
            let amountList = [];
            data.forEach(obj => {
                // モデルの中から本数のみを正規表現で取得
                const amount = obj.Model.match(/\dx/g).toString().substring(0,1);
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
                if (!amountList.includes(amount)) amountList.push(amount);
            });
            setBrandList(brandList); 
            setAmountList(amountList.sort((a, b) => a - b));           
            setRamList(data)})
    }, []);

    const selectModel = e => {
        e.preventDefault();
        dispatch({type: BUILD_RAM_MODEL, ramList});
    }

    return (
        <div className="step3 p-2">
            <span className="h4 p-1">step3: Select your RAM</span>
            <div className="col-6 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">How many?</span>
                    <select className="form-control col-4" onChange={selectModel} id="amount-of-ram">
                        <option value="">-</option>
                        {amountList.map((value, index) => <GeneralOption key={index} value={value}/>)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-4" onChange={selectModel} id="brand-of-ram">
                        <option value="">-</option>
                        {brandList.map((value, index) => <GeneralOption key={index} value={value}/>)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-4" id="model-of-ram">
                        <option value="">-</option>
                        {state.ram.map((value, index) => <ModelOption key={index} value={value}/>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Ram;