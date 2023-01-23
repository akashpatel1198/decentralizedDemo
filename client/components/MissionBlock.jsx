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
    <div className="bg-black/80 text-center pt-5 pb-5 flex flex-col items-center">
      <img src={props.imgSource} style={{"maxHeight": "400px"}}></img>
      {placeholderText}
    </div>
  );
}

export default MissionBlock;