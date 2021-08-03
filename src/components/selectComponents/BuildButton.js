import React from "react";

import BuildResult from "../resultComponents/BuildResult";

const BuildButton = () => {
    const build = e => {
        e.preventDefault();
        console.log("hello world");
        return (
            <>
                <BuildResult />
            </>
        )
    }
    return (
        <>
            <button type="button" className="btn btn-outline-dark m-3" onClick={build}>Build PC</button>
        </>
    );
};

export default BuildButton;