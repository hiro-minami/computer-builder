// Libraries
import React, { useEffect, useContext, useState } from "react";
// Actions
import { BUILD_STORAGE_BRAND, BUILD_STORAGE_MODEL, BUILD_STORAGE_SIZE } from "../../actions";
// Conponents
import GeneralOption from "./options/GeneralOption";
import ModelOption from "./options/ModelOption";
// Contexts
import AppContext from "../../contexts/AppContext";
// Constants
import { URL } from "../../constants";

const Strage = () => {
    // Context
    const { state, dispatch } = useContext(AppContext);
    // State
    const [hddModelList, setHddModelList] = useState([]);
    const [ssdModelList, setSsdModelList] = useState([]);
    const [hddSizeList, setHddSizeList] = useState([]);
    const [ssdSizeList, setSsdSizeList] = useState([]);
    const [hddBrandList, setHddBrandList] = useState([]);
    const [ssdBrandList, setSsdBrandList] = useState([]);
    // Effect for HDD
    useEffect( () => {fetch(URL+'hdd')
      .then(response => response.json())
        .then(data => {
            let sizeList = [];
            let brandList = [];
            data.forEach(obj => {
                // モデルの中からバイト数のみを正規表現で取得
                const size = obj.Model.match(/\d*[TG]B/g).toString();
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
                if (!sizeList.includes(size)) sizeList.push(size);
            });
            setHddSizeList(sizeList);  
            setHddBrandList(brandList); 
            setHddModelList(data);
        })
    }, []);
    // Effect for SSD
    useEffect(() => {fetch(URL+'ssd')
      .then(response => response.json())
        .then(data => {
            let sizeList = [];
            let brandList = [];
            data.forEach(obj => {
                // モデルの中からバイト数のみを正規表現で取得
                const size = obj.Model.match(/\d*[TG]B/g).toString();
                if (!brandList.includes(obj.Brand)) brandList.push(obj.Brand);
                if (!sizeList.includes(size)) sizeList.push(size);
            });
            setSsdSizeList(sizeList); 
            setSsdBrandList(brandList); 
            setSsdModelList(data);
        })
    }, []);
    // EventFunctrion for Size
    const selectSize = e => {
        e.preventDefault();
        let sizeList;
        const type = document.querySelector('#type-of-storage').value;
        if (type === "HDD") sizeList = hddSizeList;
        else if (type === "SSD") sizeList = ssdSizeList;
        else sizeList = [];
        dispatch({type: BUILD_STORAGE_SIZE, sizeList});
    }
    // EventFunction for Brand
    const selectBrand = e => {
        e.preventDefault();
        let sizeList;
        let brandList;
        const type = document.querySelector('#type-of-storage').value;
        if (type === "HDD") {
            sizeList = hddSizeList;
            brandList = hddBrandList;
        } else if (type === "SSD") {
            sizeList = ssdSizeList;
            brandList = ssdBrandList;
        } else {
            sizeList = [];
            brandList = [];
        }
        dispatch({type: BUILD_STORAGE_BRAND, sizeList, brandList});
    }
    // EventFunction for Model
    const selectModel = e => {
        e.preventDefault();
        let sizeList;
        let brandList;
        let modelList;
        const type = document.querySelector('#type-of-storage').value;
        if (type === "HDD") {
            sizeList = hddSizeList;
            brandList = hddBrandList;
            modelList = hddModelList;
        } else if (type === "SSD") {
            sizeList = ssdSizeList;
            brandList = ssdBrandList;
            modelList = ssdModelList;
        } else {
            sizeList = [];
            brandList = [];
            modelList = [];
        }
        dispatch({type: BUILD_STORAGE_MODEL, sizeList, brandList, modelList});
    }
    // Render
    return (
        <div className="step4 p-2">
            <span className="h4 p-1">step4: Select your Storage</span>
            <div className="col-6 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">HDD or SSD</span>
                    <select className="form-control col-6" onChange={selectSize} id="type-of-storage">
                        <option value="-">-</option>
                        <option value="HDD">HDD</option>
                        <option value="SSD">SSD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Strage</span>
                    <select className="form-control col-6" onChange={selectBrand} id="size-of-storage">
                        {state.storage.size.map((value, index) => <GeneralOption key={index} value={value} />)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" onChange={selectModel} id="brand-of-storage">
                        {state.storage.brand.map((value, index) => <GeneralOption key={index} value={value} />)}
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-storage">
                        {state.storage.model.map((value, index) => <ModelOption key={index} value={value} />)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Strage;