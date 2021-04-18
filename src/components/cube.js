import { BoxBufferGeometry, Mesh, MeshLambertMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCube() {
  // create a cube Geometry, a default white Basic Material, and combine into a Mesh
  const spec = {
    color: 'papayawhip',
  }
  const geometry = new BoxBufferGeometry(2, 2, 2); //units are in meters
  const material = new MeshLambertMaterial(spec);
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
