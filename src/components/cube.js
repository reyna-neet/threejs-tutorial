import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCube() {
  // create a cube Geometry, a default white Basic Material, and combine into a Mesh
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
