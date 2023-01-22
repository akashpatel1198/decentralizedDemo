import React from "react";
import slime from '../assets/slime_ghost.png';
import fox from '../assets/metamask_logo.png';
import { useNavContext } from "../contexts/NavContext.jsx";


const Navbar = () => {
  const setNavState = useNavContext().setNavState;
  return(
    <div id='navbar'>
      <img src={slime} style={{"maxHeight": "100%", "maxWidth": "100%"}} onClick={() => setNavState('Home')}></img>
      <button className='nav-btn' onClick={() => setNavState('Mission')}>
        Mission
      </button>
      <button className='nav-btn' onClick={() => setNavState('Mint')}>
        Mint
      </button>
      <button className='nav-btn' onClick={() => setNavState('Gallery')}>
        Gallery
      </button>
      <text>
        MetaMask
      </text>
      <img src={fox} style={{"maxHeight": "100%", "maxWidth": "100%"}}></img>
    </div>
  );
}

export default Navbar;