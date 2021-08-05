import React from "react";

const ModelOption = ({value}) => {
    return <option value={value.Benchmark} >{value.Model}</option>;
}

export default ModelOption;