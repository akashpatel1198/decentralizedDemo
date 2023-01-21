import React from "react";
import icon from '../assets/slime_ghost.png';
import { useNavContext } from "../contexts/NavContext.jsx";


const Navbar = () => {
  const setNavState = useNavContext().setNavState;
  return(
    <div id='navbar'>
      <img src={icon} style={{"maxHeight": "100%", "maxWidth": "100%"}} onClick={() => setNavState('Home')}></img>
      <button className='nav-btn' onClick={() => setNavState('Mission')}>
        Mission
      </button>
      <button className='nav-btn' onClick={() => setNavState('Mint')}>
        Mint
      </button>
      <button className='nav-btn' onClick={() => setNavState('Gallery')}>
        Gallery
      </button>
    </div>
  );
}

export default Navbar;