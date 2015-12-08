import * as constants from '../../common/constants';
import dispatcher from '../dispatcher';
import PlayerStore from './player-store';
import BulletStore from './bullet-store';

const subscribers = [];

export default const GameStore = {
  get() {
    return {
      players: PlayerStore.getAll(),
      bullets: BulletStore.getAll()
    }
  },
  subscribe(callback) {
    subscribers.push(callback);
  },
  unsubscribe(callback) {
    const index = subscribers.indexOf(callback);
    subscribers.splice(index, 1);
  },
  update() {
    bullets.forEach(bullet => {
      players.forEach(player => {
        // TODO util for collision detection
        if(collision) {
          bullets.remove(bullet.id);
          players.changeHealth(player.id, -2);
          players.changeHealth(bullet.player, 2);
        }
      });
    });
  },
  publish() {
    const state = GameStore.get();
    subscribers.forEach(callback => callback(state));
  }
}

setInterval(GameStore.publish, 1000);

dispatcher.register(action => {

});

