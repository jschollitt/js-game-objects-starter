

function Ball(X, Y, radius, colour) {
    return {
        position: { x: X,y: Y },
        radius: radius,
        colour: colour,

        // beginning and end of travel
        origin: {x: X, y: Y},
        target: null,
        
        // time of each phase in ms. Must be above 0
        launchTime: 1000,
        stayTime: 1000,
        returnTime: 1000,
        
        // keep track of progress during each moving phase
        launchTimeDelta: 0,
        stayTimeDelta: 0,
        returnTimeDelta: 0,
        
        // keep track of current phase
        state: "ready",

        update: function (tick) {
            
        },
        draw: function (context) {

        },
        launch: function (destinationX, destinationY) {

        },

    }
}

/*
 *  Helper Function
 */

function lerp(origin, destination, time) {
    return origin + (destination - origin) * time;
}

function lerpVector(origin, destination, time) {
    let position = {
        x: lerp(origin.x, destination.x, time),
        y: lerp(origin.y, destination.y, time)
    };
    return position;
}

// Easing functions. See here: https://easings.net/
function easeOut(time) {
    return 1 - Math.pow(1 - time, 3);
}

function easeIn(time) {
    return Math.pow(time, 3);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}