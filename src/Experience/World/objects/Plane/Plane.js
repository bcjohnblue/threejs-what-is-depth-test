import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export class Plane {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = 2;
    this.experience.scene.add(this.mesh);
  }

  update() {}
}
