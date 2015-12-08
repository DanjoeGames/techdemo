import { resize, keydown, keyup } from './actions';
import { GAME_STORE } from './constants';
import { subscribe } from './store';
import renderer from './render';

window.addEventListener('load', () => {
  const element = document.getElementById('app');

  const render = renderer(element, {
    renderer: 'config'
  });

  render
    .on('resize', resize)
    .on('keydown', keydown)
    .on('keyup', keyup);

  store.subscribe(GAME_STORE, (state) => render(state));
}

