import { IcosahedronBufferGeometry, Mesh, MeshToonMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createIcosahedron() {
  // create an icosahedron Geometry, a default white Basic Material, and combine into a Mesh
  const spec = {
    color: 'papayawhip',
  }
  const geometry = new IcosahedronBufferGeometry(2);
  const material = new MeshToonMaterial();
  const icosahedron = new Mesh(geometry, material);

  return icosahedron;
}

export { createIcosahedron };
