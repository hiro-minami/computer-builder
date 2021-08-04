// Libraries
import React, { useContext } from "react";
// Context
import AppContext from "../../contexts/AppContext";

const BuildResult = () => {
    // Context
    const { state } = useContext(AppContext)
    // Render
    return (
        <div className="m-2position-relative">
            <h4>Spec</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>CPU</th>
                        <th>GPU</th>
                        <th>RAM</th>
                        <th>Strage</th>
                        <th>Gaming</th>
                        <th>Working</th>
                    </tr>
                </thead>
                <tbody>
                                 
                </tbody>
            </table>
        </div>
    );
};

export default BuildResult;