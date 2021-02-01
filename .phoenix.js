// This scrip is modified based on the one from:
// https://github.com/azamuddin/phoenix/

// Preferences
Phoenix.set({
  daemon: false,
  openAtLogin: true,
});

// Globals
const HIDDEN_DOCK_MARGIN = 3;
const INCREMENT = 0.05;
const CONTROL_SHIFT = ['ctrl', 'shift'];

Event.on('willTerminate', () => {
  Storage.remove('lastPositions');
  Storage.remove('maxHeight');
})

function frameRatio(a, b){
  const widthRatio = b.width / a.width;
  const heightRatio = b.height / a.height;

  return ({width, height, x, y}) => {
    width = Math.round(width * widthRatio);
    height = Math.round(height * heightRatio);
    x = Math.round(b.x + (x - a.x) * widthRatio);
    y = Math.round(b.y + (y - a.y) * heightRatio);

    return {width, height, x, y};
  };
}

class ChainWindow {
  constructor(window, margin = 10) {
    this.window = window;
    this.margin = margin;
    this.frame = window.frame();
    this.parent = window.screen().flippedVisibleFrame();
  }

  // Difference frame
  difference() {
    const { parent, frame } = this;
    return {
      x: parent.x - frame.x,
      y: parent.y - frame.y,
      width: parent.width - frame.width,
      height: parent.height - frame.height,
    };
  }

  // Set frame
  set() {
    const { window, frame } = this;
    window.setFrame(frame);
    this.frame = window.frame();
    return this;
  }

  // Move to screen
  screen(screen) {
    this.parent = screen.flippedVisibleFrame();
    return this;
  }

  // Move to cardinal directions NW, NE, SE, SW or relative direction CENTRE
  to(direction) {
    const { parent, margin } = this;
    const difference = this.difference();

    // X-coordinate
    switch (direction) {
      case NW:
      case SW:
        this.frame.x = parent.x + margin;
        break;
      case NE:
      case SE:
        this.frame.x = parent.x + difference.width - margin ;
        break;
      case CENTRE:
        this.frame.x = parent.x + (difference.width / 2);
        break;
      default:
    }

    // Y-coordinate
    switch (direction) {
      case NW:
      case NE:
        this.frame.y = parent.y + margin;
        break;
      case SE:
      case SW:
        this.frame.y = parent.y + difference.height - margin;
        break;
      case CENTRE:
        this.frame.y = parent.y + (difference.height / 2);
        break;
      default:
    }

    return this;
  }

  // Resize SE-corner by factor
  resize(factor) {
    const { parent, margin, frame } = this;
    const difference = this.difference();
    let delta;
    if (factor.width) {
      delta = Math.min(parent.width * factor.width, difference.x + difference.width - margin);
      this.frame.width += delta;
    } else if (factor.height) {
      delta = Math.min(
        parent.height * factor.height,
        difference.height - frame.y + margin + HIDDEN_DOCK_MARGIN,
      );
      this.frame.height += delta;
    }
    return this;
  }

  // Maximise to fill whole screen
  maximise() {
    const { parent, margin } = this;

    this.frame.width = parent.width - (2 * margin);
    this.frame.height = parent.height - (2 * margin);
    return this;
  }

  // Halve width
  halve() {
    this.frame.width /= 2;
    return this;
  }

  // Fit to screen
  fit() {
    const difference = this.difference();
    if (difference.width < 0 || difference.height < 0) {
      this.maximise();
    }
    return this;
  }

  // Fill relatively to LEFT or RIGHT-side of screen, or fill whole screen
  fill(direction) {
    this.maximise();
    if (direction === LEFT || direction === RIGHT) {
      this.halve();
    }
    switch (direction) {
      case LEFT:
        this.to(NW);
        break;
      case RIGHT:
        this.to(NE);
        break;
      default:
        this.to(NW);
    }
    return this;
  }
}

// Chain a Window-object
Window.prototype.chain = function () {
  return new ChainWindow(this);
};

// To direction in screen
Window.prototype.to = function (direction, screen) {
  const window = this.chain();
  if (screen) {
    window.screen(screen).fit();
  }
  window.to(direction).set();
};

// Fill in screen
Window.prototype.fill = function (direction, screen) {
  const window = this.chain();
  if (screen) {
    window.screen(screen);
  }
  window.fill(direction).set();
  // Ensure position for windows larger than expected
  if (direction === RIGHT) {
    window.to(NE).set();
  }
};

// Resize by factor
Window.prototype.resize = function (factor) {
  this.chain().resize(factor).set();
};



////////////////////////////////////////////////
// LUMIN'S KEY BINDINGS
////////////////////////////////////////////////

// CENTER WINDOW W/O RESIZING
var move_center = Key.on('c', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    if (window) {
        window.setTopLeft({
        x: screen.x + (screen.width / 2) - (window.frame().width / 2),
        y: screen.y + (screen.height / 2) - (window.frame().height / 2)
        });
    }
});

// QUARTER SPLIT
var move_top_left = Key.on('q', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setSize({
        width: screen.width / 2,
        height: screen.height /2
    });
    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
});

var move_top_right = Key.on('w', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setSize({
        width: screen.width / 2,
        height: screen.height /2
    });
    window.setTopLeft({
        x: screen.x + (screen.width / 2),
        y: screen.y
    });
});

var move_bottom_left = Key.on('a', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setSize({
        width: screen.width / 2,
        height: screen.height /2
    });
    window.setTopLeft({
        x: screen.x,
        y: screen.y + (screen.height / 2)
    });
});

var move_bottom_right = Key.on('s', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setSize({
        width: screen.width / 2,
        height: screen.height /2
    });
    window.setTopLeft({
        x: screen.x + (screen.width / 2),
        y: screen.y + (screen.height / 2)
    });
});

// 1/2 HEIGHT SPLIT (TOP AND BOTTOM)
var move_top_half = Key.on('y', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;
    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
    window.setSize({
        width: screen.width,
        height: screen.height / 2
    });
});

var move_bottom_half = Key.on('h', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;
    window.setTopLeft({
        x: screen.x,
        y: screen.y + screen.height / 2
    });
    window.setSize({
        width: screen.width,
        height: screen.height / 2
    });
});

// 1/2 WIDTH SPLIT
var move_left_half = Key.on('z', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;
    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 2,
        height: screen.height
    });
});

var move_right_half = Key.on('x', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + screen.width / 2,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 2,
        height: screen.height
    });
});

// 1/3 WIDTH SPLIT
var move_left_third = Key.on('j', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height
    });
});

var move_mid_third = Key.on('k', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + screen.width / 3,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height
    });
});

var move_mid_third = Key.on('l', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + (screen.width / 3) * 2,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height
    });
});

// 1/3 WIDTH, 1/2 HEIGHT SPLIT

var move_left_top_third = Key.on('e', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});

var move_left_bottom_third = Key.on('d', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x,
        y: screen.y + screen.height / 2
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});

var move_mid_top_third = Key.on('r', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + screen.width / 3,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});

var move_mid_bottom_third = Key.on('f', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + screen.width / 3,
        y: screen.y + screen.height / 2
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});

var move_right_top_third = Key.on('t', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + (screen.width / 3) * 2,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});

var move_right_bottom_third = Key.on('g', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;

    window.setTopLeft({
        x: screen.x + (screen.width / 3) * 2,
        y: screen.y + screen.height / 2
    });
    window.setSize({
        width: screen.width / 3,
        height: screen.height / 2
    });
});


// 2/3 WIDTH SPLIT

var move_left_two_third = Key.on('v', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;
    
    window.setTopLeft({
        x: screen.x,
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3 * 2,
        height: screen.height
    });
});

var move_right_two_third = Key.on('b', CONTROL_SHIFT, function () {
    var screen = Screen.main().flippedVisibleFrame();
    var window = Window.focused();
    if (window === undefined) {
        return;
    }
    if (window.isFullScreen() || window.isMinimized()) return;
    
    window.setTopLeft({
        x: screen.x + (screen.width / 3),
        y: screen.y
    });
    window.setSize({
        width: screen.width / 3 * 2,
        height: screen.height
    });
});


// MOVE THE FOCUSED WINDOW TO THE NEXT COMPUTER SCREEN
Key.on('.', CONTROL_SHIFT, () => {
  const window = Window.focused();
  if(!window){
    return 
  }

  const oldScreen = window.screen(); 
  const newScreen = oldScreen.next(); 

  if(oldScreen.isEqual(newScreen)){
     return; 
  }

  const ratio = frameRatio(
     oldScreen.flippedVisibleFrame(), 
     newScreen.flippedVisibleFrame(),
  )

  window.setFrame(ratio(window.frame()));
})


/* SIZE BINDINGS */
Key.on(";", CONTROL_SHIFT, () => {
  const window = Window.focused();
  if (window) {
    window.resize({ height: -INCREMENT });
  }
});

Key.on("'", CONTROL_SHIFT, () => {
  const window = Window.focused();
  if (window) {
    window.resize({ height: INCREMENT });
  }
});

Key.on("]", CONTROL_SHIFT, () => {
  const window = Window.focused();
  if (window) {
    window.resize({ width: INCREMENT });
  }
});

Key.on("[", CONTROL_SHIFT, () => {
  const window = Window.focused();
  if (window) {
    window.resize({ width: -INCREMENT });
  }
});

