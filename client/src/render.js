import events from 'events';

export function InputHandler() {
  const input = document.createElement('input');

  input.setAttribute('type', 'text');

  return input;
}

export default function renderer(element) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const emitter = new events.EventEmitter();
  const input = InputHandler();

  let width, height;

  function resizeToFill() {
    width = canvas.width = element.offsetWidth;
    height = canvas.height = element.offsetHeight;
    return [width, height];
  }

  // Call this function with the new state every time something
  // changes.
  function render(state) {
    if(canvas.width !== width || canvas.height !== height) {
      resizeToFill();
      emitter.emit('resize', width, height);
    }

    // ..........................
    // state specific render code
    // ..........................
    const c = context;

    c.clearRect(0, 0, width, height);

    state.players.forEach(player => {
      // draw a player
    });

    state.fx.forEach(fx => {
      // draw some fx, e.g. a bullet
    });
    // ..............................
    // end state specific render code
    // ..............................
  }

  input.addEventListener('keydown' ({ which }) => {
    emitter.emit('keydown', which);
  });

  input.addEventListener('keyup' ({ which }) => {
    emitter.emit('keyup', which);
  });

  // make sure canvas fills available space
  resizeToFill();

  // add the canvas and the input handler
  element.appendChild(canvas);
  element.appendChild(input);

  // expose on as public method
  render.on = emitter.on.bind(emitter);

  return render;
}

