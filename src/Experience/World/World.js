import { Color } from 'three';
import * as THREE from 'three';
import { Plane } from './objects';

const globalDebugState = {
  depthFunc: THREE.LessEqualDepth
};
export class World {
  constructor(experience) {
    this.experience = experience;

    this.redPlane = new Plane(experience);
    this.redPlane.mesh.position.z = 0;
    this.redPlane.mesh.material.color = new Color('#ff0000');

    const redPlaneDebug = this.experience.debug.gui.addFolder(
      'Red Plane (first draw)'
    );
    redPlaneDebug.add(this.redPlane.mesh, 'visible');
    redPlaneDebug.add(this.redPlane.mesh.position, 'z').min(-5).max(5).step(1);
    redPlaneDebug.add(this.redPlane.material, 'depthTest');
    redPlaneDebug.add(this.redPlane.material, 'depthFunc', {
      LessEqual: THREE.LessEqualDepth,
      GreaterEqual: THREE.GreaterEqualDepth,
      Always: THREE.AlwaysDepth,
      Never: THREE.NeverDepth
    });
    redPlaneDebug.add(this.redPlane.material, 'depthWrite');

    this.bluePlane = new Plane(experience);
    this.bluePlane.mesh.position.z = -1;
    this.bluePlane.mesh.material.color = new Color('#0000ff');
    const bluePlaneDebug = this.experience.debug.gui.addFolder(
      'Blue Plane (second draw)'
    );
    bluePlaneDebug.add(this.bluePlane.mesh, 'visible');
    bluePlaneDebug
      .add(this.bluePlane.mesh.position, 'z')
      .min(-5)
      .max(5)
      .step(1);
    bluePlaneDebug.add(this.bluePlane.material, 'depthTest');
    bluePlaneDebug.add(this.bluePlane.material, 'depthFunc', {
      LessEqual: THREE.LessEqualDepth,
      GreaterEqual: THREE.GreaterEqualDepth,
      Always: THREE.AlwaysDepth,
      Never: THREE.NeverDepth
    });
    bluePlaneDebug.add(this.bluePlane.material, 'depthWrite');
  }

  update(...arg) {
    if (this.cube) {
      this.cube.update(...arg);
    }
  }
}
