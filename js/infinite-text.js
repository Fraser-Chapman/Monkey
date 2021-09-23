const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.'];
const waitTimeBetweenExecutionsInMS = 500;

var monkeyTyping = false;
var intervalId;

function startTyping() {
    monkeyTyping = true;
    intervalId = setInterval(function () {appendCharToOutput(getRandomChar())}, waitTimeBetweenExecutionsInMS);
}

function stopTyping() {
    monkeyTyping = false;
    clearInterval(intervalId);
}

function reset() {
    stopTyping();
    intervalId = undefined;
    document.getElementById('monkey-output').innerHTML = '';
}

function appendCharToOutput(char) {
    document.getElementById('monkey-output').innerHTML += char;
}

function getRandomChar() {
    const randomIndex = Math.round(Math.random() * (characters.length - 1));
    return characters[randomIndex];
}