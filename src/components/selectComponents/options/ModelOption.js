import React from "react";

const ModelOption = ({value}) => {
    return <option value={value.Model} data-benchmark={value.Benchmark}>{value.Model}</option>;
}

export default ModelOption;