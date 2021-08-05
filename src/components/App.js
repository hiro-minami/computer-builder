import React, {useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppContext from "../contexts/AppContext";
import Container from "./Container";
import NavBar from "./NavBar";

import reducer from "../reducers";

const App = () => {
  const initialState = {cpu: [], gpu: [], ram: [], storage: {size: [], brand: [], model: []}, result: []};

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <NavBar />
      <Container/>
    </AppContext.Provider>
  );
}

export default App;