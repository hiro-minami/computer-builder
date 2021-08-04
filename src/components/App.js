// Libraries
import React, {useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import AppContext from "../contexts/AppContext";
import Container from "./Container";
import NavBar from "./NavBar";
// Reducers
import reducer from "../reducers";

const App = () => {
  // initialState
  const initialState = {cpu: [], gpu: [], ram: [], storage: {size: [], brand: [], model: []}};
  // Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // Render
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <NavBar />
      <Container/>
    </AppContext.Provider>
  );
}

export default App;