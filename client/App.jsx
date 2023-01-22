import React from "react";
import Navbar from "./components/Navbar.jsx";
import { NavContextProvider } from "./contexts/NavContext.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import ParticlesComponent from "./components/Particles.jsx";

const App = () => {

  return(
    <div className="flex flex-col items-center">
    <NavContextProvider>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <ParticlesComponent
      ></ParticlesComponent>
    </NavContextProvider>
    </div>
  );
}

export default App;