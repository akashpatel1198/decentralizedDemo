import React from "react";
import Navbar from "./components/Navbar.jsx";
import { NavContextProvider } from "./contexts/NavContext.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import ParticlesComponent from "./components/Particles.jsx";

const App = () => {

  return(
    <NavContextProvider>
    <div className="flex flex-col items-center h-screen">
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      {/* <ParticlesComponent
      ></ParticlesComponent> */}
    </div>
    </NavContextProvider>
  );
}

export default App;