import {Group} from 'three';
import MODEL from './scene2.json';
import {loadScene} from '../../Loaders/Loader';

export default class extends Group {
  constructor() {
    super();

    this.loadingFunction = (p) => {
      console.log('loading', p)
    }
    this.name = 'ferrari';
    this.load();
  }

  async load() {
    console.log('Loading scene');
    const model = await loadScene(MODEL, this.loadingFunction);
    console.log('Done loading');

    //model.position.set(1.2 / 2, -0.3, 0);

    this.add(model);
  }
}
