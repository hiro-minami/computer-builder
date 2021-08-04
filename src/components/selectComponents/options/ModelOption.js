// Libraries
import React from "react";

const ModelOption = ({value}) => {
    // Render
    return <option value={value.Model} data-benchmark={value.Benchmark}>{value.Model}</option>;
}

export default ModelOption;