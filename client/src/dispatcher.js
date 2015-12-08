// Not a conventional dispatcher!
//
// This dispatcher doesn't talk directly to stores and instead
// sends the action to the server over a websocket.
//
// At the server the action is then dispatched again and will
// be picked up by the appropriate stores.

import { send } from './transport';
import { FLUX_ACTION } from '../../common/constants';

export default {
  dispatch(action) {
    send(FLUX_ACTION, action);
  }
}

