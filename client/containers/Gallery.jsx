import React from "react";
import Traits from "../components/Traits.jsx";
import BoxesContainer from "./BoxesContainer.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Gallery = () => {
  return(
    <div id="gallery" className="flex flex-row pointer-events-auto">
      <Traits>
      </Traits>
      <BoxesContainer>
      </BoxesContainer>
    </div>
  );
}

export default Gallery;