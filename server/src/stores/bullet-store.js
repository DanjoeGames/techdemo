import dispatcher from '../dispatcher';
import * as constants from '../../../common/constants';

const bullets = [];

export default const BulletStore {
  getAll() {
    return bullets;
  },
  update() {
    bullets.forEach(bullet => {
      // update position and velocity of bullet
    });
  }
}

dispatcher.register(action => {
  switch(action.type) {
    case constants.BULLET_CREATE:
      const id = bullets.push(action.bullet) - 1;
      action.bullet.id = id;
    case constants.BULLET_REMOVE:
      bullets.splice(action.id, 1);
  }
});

