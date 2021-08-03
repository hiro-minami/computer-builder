import React from "react";

const Ram = () => {
    return (
        <div className="step3 p-2">
            <span className="h4 p-1">step3: Select your RAM</span>
            <div className="col-4 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">How many?</span>
                    <select className="form-control col-4" id="amount-of-ram">
                        <option value="a">-</option>
                        <option value="a">1</option>
                        <option value="b">2</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-4" id="brand-of-ram">
                        <option value="a">-</option>
                        <option value="a">intel</option>
                        <option value="b">AMD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-4" id="model-of-ram">
                        <option value="a">-</option>
                        <option value="a">Corei9</option>
                        <option value="b">Corei7</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Ram;