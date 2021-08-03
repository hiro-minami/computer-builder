import React, {useReducer} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import AppContext from "../contexts/AppContext";
import NavBar from "./NavBar";
import Container from "./Container";
import init from "../utils/init";
import reducer from "../reducers"

const App = () => {
  const partsList = init();

  const [state, dispatch] = useReducer(reducer, partsList);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <NavBar />
      <Container />
    </AppContext.Provider>
  );
}

export default App;