import { DirectionalLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createLights() {
  const light = new DirectionalLight('skyblue', 8);
  light.position.set(10, 10, 10); //meters

  return light;
}

export { createLights };
