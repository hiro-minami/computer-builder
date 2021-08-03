import React from "react";

const Strage = () => {
    return (
        <div className="step4 p-2">
            <span className="h4 p-1">step4: Select your Storage</span>
            <div className="col-4 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">HDD or SSD</span>
                    <select className="form-control col-6" id="type-of-storage">
                        <option value="a">-</option>
                        <option value="a">HDD</option>
                        <option value="b">SSD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Strage</span>
                    <select className="form-control col-6" id="amount-of-strage">
                        <option value="a">-</option>
                        <option value="a">intel</option>
                        <option value="b">AMD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" id="model-of-strage">
                        <option value="a">-</option>
                        <option value="a">intel</option>
                        <option value="b">AMD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-strage">
                        <option value="a">-</option>
                        <option value="a">Corei9</option>
                        <option value="b">Corei7</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Strage;