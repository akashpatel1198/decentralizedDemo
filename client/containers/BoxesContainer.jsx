import React from "react";
import ImageBox from "../components/ImageBox.jsx";
const mockData = require("../assets/mockData.js")
import { useTraitsContext } from "../contexts/TraitsContext.jsx"; 

const BoxesContainer = () => {
  const traitsState = useTraitsContext().traitsState;
  console.log('In BoxesContainer')
  console.log(traitsState)
  let boxesArr = [];

  outer: for (let i = 0; i < mockData.length; i++) {
    const boxTraits = Object.keys(mockData[i])
    for (let filter of boxTraits) {
      if (filter === 'id') continue;
      // console.log(`filter is ${filter}`)
      // console.log(mockData[i][filter])
      const currentTrait = mockData[i][filter]
      if (!traitsState[filter][currentTrait]) continue outer;
    }
    boxesArr.push(<ImageBox data={mockData[i]} key={i}></ImageBox>);
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