import React from "react";

import SelectParts from "./selectComponents/SelectParts";
import BuildResult from "./resultComponents/BuildResult";

const Container = () => {
    return (
        <div className="container-fluid bg-light p-2">
            <SelectParts />
            <BuildResult />       
        </div>
    );
};

export default Container;