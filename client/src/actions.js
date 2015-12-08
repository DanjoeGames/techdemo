import * as constants from '../../common/constants';
import dispatcher from './dispatcher';
import controls from './controls';

export function createDefaultAction() {
  return {
    time: Date.now()
  };
}

export function resize(width, height) {
  dispatcher.dispatch({
    ...createDefaultAction(),
    type: constants.CLIENT_RESIZE,
    width,
    height,
  });
}

export function connect() {
  dispatcher.dispatch({
    ...createDefaultAction(),
    type: constants.CLIENT_CONNECT
  });
}

export function keydown(keycode) {
  dispatcher.dispatch({
    ...createDefaultAction(),
    type: controls[keycode]
  });
}

export function keyup(keycode) {
  // for now we don't care about keyup events
}

