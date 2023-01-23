import React from "react";
import Traits from "../components/Traits.jsx";
import BoxesContainer from "./BoxesContainer.jsx";

const Gallery = () => {
  return(
    <div className="w-screen h-full flex flex-row pointer-events-auto">
      <Traits>
      </Traits>
      <BoxesContainer>
      </BoxesContainer>
    </div>
  );
}

export default Gallery;