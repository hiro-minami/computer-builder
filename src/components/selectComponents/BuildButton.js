import React, { useContext } from "react";

import { BUILD_PC, DELETE_ALL_PC } from "../../actions";

import AppContext from "../../contexts/AppContext";

import { getPartsInfo } from "../../utils";

const BuildButton = () => {
    const { state, dispatch } = useContext(AppContext);

    // PCを構築していない場合はDelete Allボタンは非活性
    const isResultBlank = state.result.length === 0;

    const build = e => {
        e.preventDefault();
        // buildの情報を取得する
        const parts = getPartsInfo();
        if (parts.isInputComplete) dispatch({type: BUILD_PC , parts});
        else window.alert("パーツの選択が完了していません");
    };

    const deleteAll = e => {
        e.preventDefault();
        const result = window.confirm("全てのPCを削除してもいいですか？");
        if(result) {
            dispatch({type: DELETE_ALL_PC});
        }     
    };

    return (
        <>
            <button type="button" className="btn btn-outline-dark m-3" onClick={build}>Build PC</button>
            <button type="button" className="btn btn-outline-danger m-3" onClick={deleteAll} disabled={isResultBlank}>Delete All PC</button>
        </>
    );
};

export default BuildButton;