import dispatcher from '../dispatcher';
import * as constants from '../../../common/constants';
import config from '../../../common/config';
import bullets from '../actions/bullets';

const players = [];

export default const PlayerStore = {
  update() {
    players.forEach(player => {
      // update position and velocity
    });
  },
  createPlayer() {
    return {
      x: 0,
      y: 0,
      rotation: 0,
      velocity: 0,
      health: 10,
      viewport: {
        width: 0,
        height: 0
      }
    };
  },
  registerPlayer(player) {
    return players.push(player) - 1;
  },
  get(id) {
    return players[id];
  },
  getAll() {
    return players;
  }
};

dispatcher.register(action => {
  const id = action[constants.PLAYER_ID];
  const player = players.get(id);

  switch(action.type) {
    case constants.CLIENT_RESIZE:
      player.viewport = {
        width: action.width,
        height: action.height
      };
    case constants.PLAYER_ACCELERATE:
      player.velocity += (0.1 * action.direction);
    case constants.PLAYER_ROTATE:
      player.rotation += (0.1 * action.direction);
    case constants.PLAYER_SHOOT:
      bullets.create({
        playerId: id,
        x: player.x,
        y: player.y,
        rotation: player.rotation,
        velocity: 10
      });
  }
});

