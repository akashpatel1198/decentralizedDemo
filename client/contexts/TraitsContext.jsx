import React, { useContext, useState } from 'react';

const TraitsContext = React.createContext();

export function useTraitsContext() {
  return useContext(TraitsContext)
}

export function TraitsContextProvider({ children }) {
  const [traitsState, setTraitsState] = useState(
    {
      "Outfit": {
          "Spacesuit": true,
          "Wizard": true,
          "Cowboy": true
      },
      "Skin": {
          "Dragon": true,
          "Ogre": true,
          "Elf": true
      },
      "Background": {
          "Green": true,
          "Red": true,
          "Blue": true
      }
  })
  

  return (
    <TraitsContext.Provider value={{traitsState, setTraitsState}}>
      {children}
    </TraitsContext.Provider>
  );
  }