import React from "react";

import Cpu from "./Cpu";
import Gpu from "./Gpu";
import Ram from "./Ram";
import Strage from "./Strage";
import BuildButton from "./BuildButton";

const SelectParts = () => {
    return (
        <div className="col">
            <Cpu />
            <Gpu />
            <Ram />
            <Strage />
            <BuildButton />
        </div>
    );
};

export default SelectParts;