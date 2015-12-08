import dispatcher from '../dispatcher';
import { BULLET_CREATE } from '../../../common/constants';

export {
  create(bullet) {
    dispatcher.dispatch({
      type: BULLET_CREATE,
      bullet
    });
  }
}

