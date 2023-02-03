import React, { useMemo, useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import partcilesConfig from "../config/particlesjs-custom";


const ParticlesComponent = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  })

  return(
    <Particles className="-z-10" init={particlesInit} options={partcilesConfig.black}>
      
    </Particles>
  );
}

export default ParticlesComponent;

