import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";

import Result from "./Result";

const BuildResult = () => {
    const { state } = useContext(AppContext);
    return (
        <div className="m-2position-relative">
            <h4>Spec</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CPU</th>
                        <th>GPU</th>
                        <th>RAM</th>
                        <th>Strage</th>
                        <th>Gaming</th>
                        <th>Working</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.result.map((value, index) => <Result key={index} value={value} />)}
                </tbody>
            </table>
        </div>
    );
};

export default BuildResult;