const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.'];
const waitTimeBetweenExecutionsInMS = 100;
const outputLabel = 'monkey-output';

var intervalId;

function startTyping() {
    intervalId = setInterval(function () {appendCharToOutput(getRandomChar())}, waitTimeBetweenExecutionsInMS);
}

function getRandomChar() {
    const randomIndex = Math.round(Math.random() * (characters.length - 1));
    return characters[randomIndex];
}

function appendCharToOutput(char) {
    document.getElementById(outputLabel).innerHTML += char;
    scrollToBottom();
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function stopTyping() {
    clearInterval(intervalId);
}

function reset() {
    stopTyping();
    intervalId = undefined;
    document.getElementById(outputLabel).innerHTML = '';
}
