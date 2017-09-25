import { Group, Mesh, MeshStandardMaterial, PlaneGeometry, RepeatWrapping } from 'three';
import MODEL from './scene.json';
import { loadModel, loadScene, loadTextureSet, GetAsset } from '../../Loaders/Loader';

export default class extends Group {
  constructor() {
    super();

    this.loadingFunction = (p) => {
      console.log('loading', p)
    }
    this.name = 'bunny';
    this.load();
  }

  async load() {
    console.log('Loading bunny scene');
    const model = await loadScene(MODEL, this.loadingFunction);
    console.log('Loading bunny geo');
    console.log('Done loading');


    //model.position.set(1.2 / 2, -0.3, 0);

    console.log(model);

    this.add(model);
  }
}
