import * as THREE from 'three';

export class Plane {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    this.material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.experience.scene.add(this.mesh);
  }

  update() {}
}
