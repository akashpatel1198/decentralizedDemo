import React from "react";
import { useTraitsContext } from "../contexts/TraitsContext.jsx"; 

const CurrentTraits = (props) => {
  const traitsState = useTraitsContext().traitsState;
  const setTraitsState = useTraitsContext().setTraitsState;

  const traitsArr = [];

  for (let mainTrait of Object.keys(traitsState)) {
    for (let specificTrait of Object.keys(traitsState[mainTrait])) {
      if (traitsState[mainTrait][specificTrait]) {
        console.log(`selecting for ${mainTrait}: ${specificTrait}`);
        traitsArr.push(
          <div className="selected-trait">
            <span className="mr-1 ml-1">
              {`${mainTrait}: ${specificTrait}`}
            </span>
            <button className="x-button" onClick={() => {
              setTraitsState((state) => {
                const newState = { ...state };
                newState[mainTrait][specificTrait] = false;
                return newState
              })
            }}>X</button>
          </div>
        )
      }
    }
  }

  return(
    <div id="current-traits">
      <h1>Selected Traits</h1>
      <div id="selected-traits-container">
        {traitsArr}
      </div>
    </div>
  );
}

export default CurrentTraits;