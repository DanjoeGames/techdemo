import * as constants from '../../common/constants';
import dispatcher from './dispatcher';

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
    type: constants.KEYDOWN,
    keycode
  });
}

export function keyup(keycode) {
  dispatcher.dispatch({
    ...createDefaultAction(),
    type: constants.KEYUP,
    keyup
  });
}

