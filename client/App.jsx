import React from "react";
import Navbar from "./components/Navbar.jsx";
import { NavContextProvider } from "./contexts/NavContext.jsx";
import { TraitsContextProvider } from "./contexts/TraitsContext.jsx"
import MainContainer from "./containers/MainContainer.jsx";
import ParticlesComponent from "./components/Particles.jsx";

const App = () => {

  return(
    <NavContextProvider>
    <TraitsContextProvider>
    <div className="flex flex-col items-center h-screen">
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      {/* <ParticlesComponent
      ></ParticlesComponent> */}
    </div>
    </TraitsContextProvider>
    </NavContextProvider>
  );
}

export default App;