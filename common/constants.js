export {
  // internal constants for flux over the wire
  FLUX_ACTION: 'FLUX_ACTION',
  FLUX_SUBSCRIPTION: 'FLUX_SUBSCRIPTION',

  // store names
  PLAYER_STORE: 'PLAYER_STORE',
  BULLET_STORE: 'BULLET_STORE',
  GAME_STORE: 'GAME_STORE',

  // client events
  CLIENT_RESIZE: 'CLIENT_RESIZE',
  CLIENT_CONNECT: 'CLIENT_CONNECT',
  CLIENT_KEYDOWN: 'CLIENT_KEYDOWN',
  CLIENT_KEYUP: 'CLIENT_KEYUP',

  // player events
  PLAYER_ACCELERATE: 'PLAYER_ACCELERATE',
  PLAYER_ROTATE: 'PLAYER_ROTATE',
  PLAYER_SHOOT: 'PLAYER_SHOOT',

  // bullet events
  BULLET_CREATE: 'BULLET_CREATE'

  // utils for protected action keys with a format to prevent
  // against collisions.
  PLAYER_ID: '@@PLAYER_ID@@'
}

