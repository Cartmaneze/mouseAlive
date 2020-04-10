let robot = require("robotjs");

let mouse;
let up = -1;
let down = 1;
let left = -1;
let right = 1;
let vertDirection;
let horDirection;

console.log("I'll help you skip auto screen saver, enjoy");

let priviousPosition = robot.getMousePos();

let move = () => {
    mouse = robot.getMousePos();
    let hours = new Date().getHours();
    new Date().getHours() < 10 ? hours = "0"+new Date().getHours() : hours = new Date().getHours();
    let minutes;
    new Date().getMinutes() < 10 ? minutes = "0"+new Date().getMinutes() : minutes = new Date().getMinutes();
    let seconds;
    new Date().getSeconds() < 10 ? seconds = "0"+new Date().getSeconds() : seconds = new Date().getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;
    if (Math.abs(mouse.x) > 10000) {
        console.log(`${time} Screen saver `);
    } else if (mouse.x === priviousPosition.x && mouse.y === priviousPosition.y) {
        console.log(`${time} I moved mouse for you`);
        mouse.y > 1 ? vertDirection = up : vertDirection = down;
        mouse.x > 1 ? horDirection = left : horDirection = right;
        robot.moveMouse(mouse.x + horDirection, mouse.y + vertDirection);
    } else {
        console.log(`${time} You moved mouse by your self`);
    }
    priviousPosition = robot.getMousePos();
    setTimeout(move, 60000);
};

setTimeout(move, 3000);



