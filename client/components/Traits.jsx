import React, { useState } from 'react';
import ColorSelect from "./ColorSelect.jsx";
import styled from 'styled-components';
import { SidebarData } from './SidebarData.jsx';
import SubMenu from './SubMenu.jsx';

const SidebarWrap = styled.div`
  width: 100%;
`;

const Traits = () => {
  return(
    <div className="bg-white" id='traits'>
      <h1 className="text-center text-xl pt-3 pb-3">Traits</h1>    
      <SidebarWrap>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </div>
  );
}


export default Traits;
