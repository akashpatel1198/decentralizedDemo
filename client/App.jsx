import React from "react";
import Navbar from "./components/Navbar.jsx";
import { NavContextProvider } from "./contexts/NavContext.jsx";
import MainContainer from "./containers/MainContainer.jsx";

const App = () => {
  return(
    <div>
    <NavContextProvider>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
    </NavContextProvider>
    </div>
  );
}

export default App;