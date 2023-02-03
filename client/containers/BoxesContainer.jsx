import React from "react";
import ImageBox from "../components/ImageBox.jsx";

const BoxesContainer = () => {
  const boxesArr = [];

  for (let i = 0; i < 100; i++) {
    boxesArr.push(<ImageBox></ImageBox>);
  };

  return(
    <div id="boxes-main-container">
      <h1 className="text-center text-xl pt-3 pb-3">List of Available Images</h1>
      <div id='boxes-container' className="bg-green-600/75">
        {boxesArr}
      </div>
    </div>
  );
}

export default BoxesContainer;