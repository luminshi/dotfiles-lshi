// Preferences
Phoenix.set({
  daemon: false,
  openAtLogin: true,
});


// Globals
const CONTROL_SHIFT = ['ctrl', 'shift'];



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

