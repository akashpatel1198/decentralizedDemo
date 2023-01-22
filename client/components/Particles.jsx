import React, { useMemo, useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import partcilesConfig from "../config/particlesjs-custom";
import { useNavContext } from "../contexts/NavContext.jsx";


const ParticlesComponent = () => {
  const navState = useNavContext().navState;

  let currentConfig = {}

  if (navState === 'Home') currentConfig = {};
  else if (navState === 'Mission') currentConfig = partcilesConfig.snow;
  else if (navState === 'Mint') currentConfig = partcilesConfig.lines;
  else if (navState === 'Gallery') currentConfig = partcilesConfig.space;

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  })

  return(
    <Particles init={particlesInit} options={currentConfig}>
      
    </Particles>
  );
}

export default ParticlesComponent;

