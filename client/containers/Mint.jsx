import React from "react";
import batman from '../assets/batman_face.png';

const Mint = () => {
  const buttonAnimation = "mt-5 mb-2 relative rounded-lg border-2 border-black bg-transparent py-2.5 px-5 \
  font-medium uppercase text-black transition-colors pointer-events-auto \
  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full \
  before:origin-top-left before:scale-x-0 before:bg-black\
  before:transition-transform before:duration-300 before:content-[''] \
  hover:text-white before:hover:scale-x-100"

  return(
    <div className="flex flex-col items-center justify-start w-50">
      Container for Mint
      <img src={batman} style={{"maxHeight": "100%", "maxWidth": "250px"}}></img>
      <button className={buttonAnimation} onClick={() => console.log('connecting')}>
        CONNECT WALLET
      </button>
      <span className="text-red-600">*Coming Soon*</span>
    </div>
  );
}

export default Mint;