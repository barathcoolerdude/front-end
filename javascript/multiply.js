const { log } = require("console");
const readline = require("readline");

function getRandomInt(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for input

function askQuestion(){
    let value_1 = getRandomInt(2, 20);
    let value_2 = getRandomInt(2, 20);
    product = value_1 * value_2;
    rl.question(`multiple these ${value_1} and ${value_2}: `, function(number) {
        if (Number(number) == product){
            console.log("that's correct")
            rl.close();
        }else{
            console.log("you suck");
            askQuestion();
        }
    });
}

askQuestion();