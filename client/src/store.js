// Not a conventional store!
//
// The data and events in this store come from the server
// over websockets.
import events from 'events';
import * as transport from './transport';
import { FLUX_SUBSCRIPTION } from '../../common/constants';

const emitter = new events.EventEmitter();

// when store subscription messages happen publish
// them on the event system
transport.on(FLUX_SUBSCRIPTION, (update) => {
  events.emit(update.store, update.data);
});

// add handlers for events from a given store
export function subscribe(storeName, callback) {
  events.on(storeName, callback);
}

