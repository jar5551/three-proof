import {Group, SpotLight, PointLight} from 'three';
import TWEEN, {Linear} from 'gsap';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);
    this.lights = [];
    this.createLight();
    this.addLights();
  }

  // createLight({color = 0xFFFFFF, intensity = 1, distance = 50, angle = 1, penumbra = 1, decay = 1, position, targetPosition, castShadow = true }) {
  createLight() {

    // const dir = new SpotLight(color, intensity, distance, angle, penumbra, decay);
    const dir = new SpotLight(0xFFFFFF, 1, 50, 1, 1, 1);
    dir.position.set(-1, 5, 2);
    // dir.position.set(position.x, position.y, position.z);
    dir.target.position.set(0, 0, 0);
    // dir.target.position.set(targetPosition.x, targetPosition.y, targetPosition.z);

    dir.castShadow = true;

    dir.shadow.mapSize.width = 512 * 2;
    dir.shadow.mapSize.height = 512 * 2;

    dir.shadow.camera.near = 1;
    dir.shadow.camera.far = 10;
    dir.shadow.camera.fov = 40;
    this.lights.push(dir);
  }

  addLights() {
    for (let light of this.lights) {
      this.add(light);
    }
  }
}
