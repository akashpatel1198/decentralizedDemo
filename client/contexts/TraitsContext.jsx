import React, { useContext, useState } from 'react';

const TraitsContext = React.createContext();

export function useTraitsContext() {
  return useContext(TraitsContext)
}

export function TraitsContextProvider({ children }) {
  const [traitsState, setTraitsState] = useState(
    {
      "Background": {
        "Green": false,
        "Red": false,
        "Blue": false
      },
      "Skin": {
        "Dragon": false,
        "Ogre": false,
        "Elf": false
      },
      "Outfit": {
        "Spacesuit": false,
        "Wizard": false,
        "Cowboy": false
    },
  })
  

  return (
    <TraitsContext.Provider value={{traitsState, setTraitsState}}>
      {children}
    </TraitsContext.Provider>
  );
  }