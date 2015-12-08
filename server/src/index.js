import io from 'socket-io';

import dispatcher from './dispatcher';
import PlayerStore from './player-store';
import GameStore from './game-store';

import {
  FLUX_SUBSCRIPTION, FLUX_ACTION, PLAYER_ID,
  GAME_STORE
} from '../../constants/constants';

io(80).on('connection', socket => {
  const player = PlayerStore.newPlayer();
  const id = PlayerStore.registerPlayer(player);

  // save this id against the socket
  playerLookup.set(socket, playerId);

  socket.on(FLUX_ACTION, (action) => {
    // we're going to mutate the action behind a safe key (eww)
    action[PLAYER_ID] = id;

    // forward all incoming actions to the server's dispatcher
    dispatcher.dispatch(action);
  });

  // Connect store to websocket. At somepoint this should becomee
  // an automatic process.
  GameStore.subscribe(state => {
    // TODO remove entities outside this players viewport
    socket.emit(FLUX_SUBSCRIPTION, {
      store: GAME_STORE,
      data: state
    });
  });
});

