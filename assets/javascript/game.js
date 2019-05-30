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
var isHidden = true;
var attemptsLeft = 10;

// This function resets the game, and creates a character for the user to try to guess
function reset(attempts){
    if (attempts < 1){
        loss.add();
    }
    else{
        wins.add();
    }

    document.getElementById('u-guessed').innerText = "";
    document.getElementById('letter-guessed').innerText = "";
    var compKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var x = Math.floor((Math.random() * 26));
    var y = compKey[x];
    // attemptsLeft = 10;
    return y;

}







//main

compLetter = reset(attemptsLeft);
console.log(compLetter);

document.onkeyup = function(event){

}


// testing if add function works
// var el = wins.score;
// console.log(el);
// wins.add();
// var el2 = wins.score;
// console.log(el2);