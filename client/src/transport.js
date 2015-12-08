import Socket from 'socket.io';
import config from '../../common/config.json';
import { ACTION } from '../../common/constants';

export const socket = Socket(`${config.host}:${config.port}`);

export function send(...args) {
  socket.emit(ACTION, ...args);
}

export function on(event, func) {
  socket.on(event, func);
}

