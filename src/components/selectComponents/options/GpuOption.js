import React from "react";

const CpuOption = ({value}) => {
    return <option value={value.Model}>{value.Model}</option>;
}

export default CpuOption;