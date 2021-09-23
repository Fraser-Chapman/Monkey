const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "."];

function appendCharToOutput(char) {
    document.getElementById("monkey-output").innerHTML += char;
}

function getRandomChar() {
    const randomIndex = Math.round(Math.random() * (characters.length - 1));
    return characters[randomIndex];
}