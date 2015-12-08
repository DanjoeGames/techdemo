import io from 'socket-io';

import { FLUX_ACTION, PLAYER_ID } from '../../constants/constants';
import dispatcher from './dispatcher';
import PlayerStore from './player-store';

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
});

