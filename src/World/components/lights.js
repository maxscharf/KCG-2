import * as THREE from 'three';

function createLights() {
  const light = new THREE.PointLight(0xffffff, 1, 100000);

  
  light.position.set(100, 100, 100);



  return light;
}

export { createLights };
