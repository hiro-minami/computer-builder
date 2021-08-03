import React from "react";

const Gpu = () => {
    return (
        <div className="step2 p-2">
            <span className="h4 p-1">step2: Select your GPU</span>
            <div className="col-4 p-1">
                <div className="col-6 p-2">
                    <span className="h6 p-2">Brand</span>
                    <select className="form-control col-6" id="brand-of-gpu">
                        <option value="a">-</option>
                        <option value="a">intel</option>
                        <option value="b">AMD</option>
                    </select>
                </div>
                <div className="col-6 p-2">
                    <span className="h6 p-2">Model</span>
                    <select className="form-control col-6" id="model-of-gpu">
                        <option value="a">-</option>
                        <option value="a">Corei9</option>
                        <option value="b">Corei7</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Gpu;