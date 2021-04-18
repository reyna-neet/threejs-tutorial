import { PerspectiveCamera } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCamera() {
  const Camera = new PerspectiveCamera(
    35, // fov = Field of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  Camera.position.set(0, 0, 10);

  return Camera;
}

export { createCamera };
