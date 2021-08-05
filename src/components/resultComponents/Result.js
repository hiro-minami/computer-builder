import React, { useContext } from "react";
import { DELETE_PC } from "../../actions";
import AppContext from "../../contexts/AppContext";

const Result = ({value}) => {
    const { dispatch } = useContext(AppContext);
    const id = value.id;
    const deleteButton = () => {
        const result = window.confirm(`(id=${id})のPCを削除してもいいですか？`);
        if(result) {
            dispatch({type: DELETE_PC, id});
        }
    };
    
    return (
        <tr>
            <td>{value.id}</td>
            <td>{value.benchmarkOfCpu}</td>
            <td>{value.benchmarkOfGpu}</td>
            <td>{value.benchmarkOfRam}</td>
            <td>{value.benchmarkOfStorage}</td>
            <td>{value.resultOfWorking}</td>
            <td>{value.resultOfGaming}</td>
            <td><button type="button" className="btn btn-danger" onClick={deleteButton}>削除</button></td>
        </tr>
    );
};

export default Result;