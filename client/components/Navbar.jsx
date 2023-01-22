import React from "react";
import slime from '../assets/slime_ghost.png';
import fox from '../assets/metamask_logo.png';
import { useNavContext } from "../contexts/NavContext.jsx";
import { FaHome, FaShoppingCart, FaBuromobelexperte } from "react-icons/fa";




const Navbar = () => {
  const NavBarIcon = ({ icon, page }) => {
    return(
    <div className="navbar-icon group" onClick={() => setNavState(page)}>
      {icon}
      <span className="navbar-tooltip group-hover:scale-100">
        {page}
      </span>
    </div>
    )
  };

  const setNavState = useNavContext().setNavState;
  const buttonStyle = 'flex flex-col item-center justify-center h-11 w-11 mt-2 mb-2 mc-auto\
                      bg-first hover:bg-third \
                      rounded-md';
  const iconStyle = 'h-10 w-10';
  const textStyle = 'text-xs hover-underline-animation cursor-pointer';
  return(
    <div className="w-screen h-12 m-0 z-20 fixed
                    flex flex-row justify-evenly items-center
                    bg-second">
      <img src={slime} style={{"maxHeight": "100%", "maxWidth": "100%"}} onClick={() => setNavState('Home')}></img>
      <NavBarIcon icon={<FaHome  size='30'></FaHome>} page={'Mission'}>
      </NavBarIcon>
      <NavBarIcon icon={<FaShoppingCart size='27'></FaShoppingCart>} page={'Mint'}>
      </NavBarIcon>
      <NavBarIcon icon={<FaBuromobelexperte size='30'></FaBuromobelexperte>} page={'Gallery'}>
      </NavBarIcon>
      
      <div className="h-12">
        <img src={fox} style={{"maxHeight": "100%", "maxWidth": "100%"}}></img>
      </div>
    </div>
  );
}

export default Navbar;
