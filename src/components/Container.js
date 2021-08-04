// Libraries
import React from "react";
// Components
import SelectParts from "./selectComponents/SelectParts";
import BuildResult from "./resultComponents/BuildResult";

const Container = () => {
    // Render
    return (
        <div className="container-fluid bg-light p-2">
            <SelectParts />
            <BuildResult />       
        </div>
    );
};

export default Container;