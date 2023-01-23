import React, { useContext, useState } from 'react';

const TraitsContext = React.createContext();

export function useNavContext() {
  return useContext(TraitsContext)
}

export function NavContextProvider({ children }) {
  const [traitsState, setTraitsState] = useState({})
  

  return (
    <TraitsContext.Provider value={{traitsState, setTraitsState}}>
      {children}
    </TraitsContext.Provider>
  );
  }