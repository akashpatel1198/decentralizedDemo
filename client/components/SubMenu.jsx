import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTraitsContext } from "../contexts/TraitsContext.jsx";

const SidebarLink = styled.div`
  display: flex;
  color: #000000 ;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #737373;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  
`;

const DropdownLink = styled.div`
  background: #FFFFFF;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2rem;
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  &:hover {
    background: #737373;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const traitsState = useTraitsContext().traitsState;
  const setTraitsState = useTraitsContext().setTraitsState;

  const handleChange = (traitStr, itemStr) => {
    setTraitsState((state) => {
      // console.log('box checked');
      // console.log(`traitStr is ${traitStr} and itemStr is ${itemStr}`)
      const newState = { ...state };
      newState[itemStr] = state[itemStr] ? state[itemStr] : {};
      newState[itemStr][traitStr] = !newState[itemStr][traitStr];
      console.log('the new state is: ', newState);
      return newState;
    })
  }

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((trait, index) => {
          return (
            <DropdownLink key={index}>
              {/* {item.icon} */}
              <SidebarLabel>{trait.title}</SidebarLabel>
              <input style={{height: '35px'}} type="checkbox" 
              checked={Boolean(traitsState?.[item.title]?.[trait.title])} 
              onChange={() => handleChange(trait.title, item.title)}></input>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;