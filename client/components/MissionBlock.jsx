import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const MissionBlock = (props) => {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  const placeholderText = lorem.generateParagraphs(5);
  return(
    <div className="text-center pt-15 pb-5 flex flex-col items-center">
      <img src={props.imgSource} style={{"maxHeight": "400px"}} className="mt-15"></img>
      <div className="text-center mt-8 pl-10 pr-10">
        {placeholderText}
      </div>
    </div>
  );
}

export default MissionBlock;