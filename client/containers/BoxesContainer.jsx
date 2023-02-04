import React from "react";
import ImageBox from "../components/ImageBox.jsx";
import CurrentTraits from "../components/CurrentTraits.jsx";
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
      const atLeastOneTrue = Object.values(traitsState[filter]).includes(true);
      if (atLeastOneTrue) {
        const currentTrait = mockData[i][filter]
        if (!traitsState[filter][currentTrait]) continue outer;
      }
    }
    boxesArr.push(<ImageBox data={mockData[i]} key={i}></ImageBox>);
  };

  return(
    <div id="boxes-main-container">
      <h1 className="text-center text-xl pt-3 pb-4">List of Available Images</h1>
      <CurrentTraits></CurrentTraits>
      <div id='boxes-container'>
        {boxesArr}
      </div>
    </div>
  );
}

export default BoxesContainer;