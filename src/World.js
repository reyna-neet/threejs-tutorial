import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createIcosahedron } from './components/icosahedron.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// module scoped variables
let camera;
let renderer;
let scene;

class World{
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const icosahedron = createIcosahedron();
    const cube = createCube();
    const light = createLights();
    
    scene.add(icosahedron);
    scene.add(cube);
    scene.add(cube, light);

    cube.translateX(3);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };
