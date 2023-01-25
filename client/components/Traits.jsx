import React from "react";
import ColorSelect from "./ColorSelect.jsx";

const Traits = () => {
  const buttonAnimation = "mt-2 border-2 border-blue-600 rounded-lg px-3 py-2 \
  text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200";
  return(
    <div className="bg-green-900/95" id='traits'>
      <h1 className="text-center text-xl pt-3 pb-3">Traits</h1>
      <ColorSelect></ColorSelect>
      <button className={buttonAnimation} onClick={() => console.log('filtering uno')}>
        FILTER
      </button>
      <div className="mt-3 mb-3" onClick={() => console.log('filtering dos')}>
        <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">FILTER</span>
        </a>
      </div>

      <div className="mt-3 mb-3" onClick={() => console.log('filtering tres')}>
        <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
        <span class="relative">Filter</span>
        </a>
      </div>
    </div>
  );
}

export default Traits;
