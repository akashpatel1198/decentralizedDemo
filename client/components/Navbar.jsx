import React from "react";
// import slime from '../assets/slime_ghost.png';
// import fox from '../assets/metamask_logo.png';
import logo from '../assets/LOGO_Yizzy.png';
import { useNavContext } from "../contexts/NavContext.jsx";
import { FaHome, FaShoppingCart, FaBuromobelexperte } from "react-icons/fa";


const Navbar = () => {
  const setNavState = useNavContext().setNavState;
  const navState = useNavContext().navState;

  const NavBarIcon = ({ icon, page }) => {
    let changeBG = '';
    if (navState === page) changeBG = ' border-2 border-white';

    return(
    <div className={"navbar-icon group" + changeBG} onClick={() => setNavState(page)}>
      {icon}
      <span className="navbar-tooltip group-hover:scale-100">
        {page}
      </span>
    </div>
    )
  };

  

  return(
    <div className="h-14 z-20 bg-white
                    flex flex-row justify-between items-center 
                    "
          id="navbar">
      <img src={logo} style={{"maxHeight": "100%", "maxWidth": "100%"}} onClick={() => setNavState('Home')}></img>
      <NavBarIcon icon={<FaHome  size='30'></FaHome>} page={'Mission'}>
      </NavBarIcon>
      <NavBarIcon icon={<FaShoppingCart size='27'></FaShoppingCart>} page={'Mint'}>
      </NavBarIcon>
      <NavBarIcon icon={<FaBuromobelexperte size='30'></FaBuromobelexperte>} page={'Gallery'}>
      </NavBarIcon>
      <img src={logo} style={{"maxHeight": "100%", "maxWidth": "100%"}}></img>
    </div>
  );
}

export default Navbar;
