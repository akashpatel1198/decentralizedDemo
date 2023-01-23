import React from "react";
import Home from "./Home.jsx";
import Mission from "./Mission.jsx";
import Mint from "./Mint.jsx";
import Gallery from "./Gallery.jsx";
import { useNavContext } from "../contexts/NavContext.jsx";

const MainContainer = () => {
  const navState = useNavContext().navState;
  let mainPage = <div>No Page Loaded</div>;
  switch (navState) {
    case 'Home':
      mainPage = <Home></Home>;
      break;
    case 'Mission':
      mainPage = <Mission></Mission>;
      break;
    case 'Mint':
      mainPage = <Mint></Mint>;
      break;
    case 'Gallery':
      mainPage = <Gallery></Gallery>;
      break;
    defualt:
      mainPage = <div>No Page Loaded</div>;
  }
  return(
    <div className="z-10 mt-12 flex flex-col items-center">
      {mainPage}
    </div>
  );
}

export default MainContainer;