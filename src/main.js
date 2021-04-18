import { World } from './World.js';

const button = document.getElementById('renderScene');

button.onclick = function() {
  const container = document.querySelector('#scene-container');
  const world = new World(container);

  world.render();
  button.style.visibility = 'hidden';
}
