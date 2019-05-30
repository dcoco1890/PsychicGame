var wins = {
    score: 0,

    add: function() {
        this.score = this.score + 1;
        return this.score;
    }

}

var loss = {
    score: 0,

    add: function(){
        this.score = this.score + 1;
        return this.score;
    }
}
var userGuesses = [];
var isHidden = true;
var attemptsLeft = 10;

// This function resets the game, and creates a character for the user to try to guess
function reset(){
  
    document.getElementById('u-guessed').innerText = "";
    document.getElementById('letter-guessed').innerText = "";
    var compKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var x = Math.floor((Math.random() * 26));
    var y = compKey[x];
    attemptsLeft = 10;   
    return y;

}







//main


//testing attempts left variables
compLetter = reset();
console.log(compLetter);


document.onkeyup = function(event){

    attemptsLeft--;
    var userInput = event.key.toLowerCase();

    document.getElementById('u-guessed').innerText = "You picked: "
    userGuesses.push(userInput);
    document.getElementById('letter-guessed').innerHTML = userGuesses;

    if (userInput === compLetter){
        document.getElementById('middleText').innerText = "You Win! But now I'm thinking of another letter...";
        
    }




}


// testing if add function works
// var el = wins.score;
// console.log(el);
// wins.add();
// var el2 = wins.score;
// console.log(el2);