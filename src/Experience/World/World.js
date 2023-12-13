import { Cube } from './objects';

export class World {
  constructor(experience) {
    this.experience = experience;

    this.cube = new Cube(experience);
  }

  update(...arg) {
    if (this.cube) {
      this.cube.update(...arg);
    }
  }
}
