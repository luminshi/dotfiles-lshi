// CENTER WINDOW W/O RESIZING
var move_center = Key.on('c', [ 'ctrl', 'shift' ], function () {
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
var move_top_left = Key.on('q', [ 'ctrl', 'shift' ], function () {
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

var move_top_right = Key.on('w', [ 'ctrl', 'shift' ], function () {
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

var move_bottom_left = Key.on('a', [ 'ctrl', 'shift' ], function () {
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

var move_bottom_right = Key.on('s', [ 'ctrl', 'shift' ], function () {
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
var move_top_half = Key.on('y', [ 'ctrl', 'shift' ], function () {
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

var move_bottom_half = Key.on('h', [ 'ctrl', 'shift' ], function () {
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
var move_left_half = Key.on('z', [ 'ctrl', 'shift' ], function () {
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

var move_right_half = Key.on('x', [ 'ctrl', 'shift' ], function () {
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
var move_left_third = Key.on('j', [ 'ctrl', 'shift' ], function () {
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

var move_mid_third = Key.on('k', [ 'ctrl', 'shift' ], function () {
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

var move_mid_third = Key.on('l', [ 'ctrl', 'shift' ], function () {
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

var move_left_top_third = Key.on('e', [ 'ctrl', 'shift' ], function () {
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

var move_left_bottom_third = Key.on('d', [ 'ctrl', 'shift' ], function () {
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

var move_mid_top_third = Key.on('r', [ 'ctrl', 'shift' ], function () {
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

var move_mid_bottom_third = Key.on('f', [ 'ctrl', 'shift' ], function () {
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

var move_right_top_third = Key.on('t', [ 'ctrl', 'shift' ], function () {
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

var move_right_bottom_third = Key.on('g', [ 'ctrl', 'shift' ], function () {
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
