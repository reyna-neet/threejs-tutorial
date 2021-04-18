import { SpotLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createLights() {
  const light = new SpotLight('white', 10);
  light.position.set(-1, 2, 8); //meters

  return light;
}

export { createLights };
