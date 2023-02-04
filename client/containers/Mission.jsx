import React from "react";
import MissionBlock from "../components/MissionBlock.jsx";
import blockchain from '../assets/blockchain_logo.png';
import avngArt from '../assets/avengers_art.jpg';
import avngMovie from '../assets/avengers_movie.jpg';
import hulkPunch from '../assets/hulk_punch.gif';

const Mission = () => {
  return(
    // pointer-events-auto h-screen overflow-y-auto
    <div className="flex flex-col items-center">
      <div  className="flex flex-col justify-evenly items-center w-3/5">
      Container for Mission
      <MissionBlock imgSource={blockchain}></MissionBlock>
      <MissionBlock imgSource={hulkPunch}></MissionBlock>
      <MissionBlock imgSource={avngArt}></MissionBlock>
      <MissionBlock imgSource={avngMovie}></MissionBlock>
      </div>
    </div>
    
  );
}

export default Mission;