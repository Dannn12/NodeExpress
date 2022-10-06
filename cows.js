
const cows = require('cowsay');

const speak = text => cows.say({'text': text});

console.log(speak ("Hello there"));

module.exportss = {
    speak
}
