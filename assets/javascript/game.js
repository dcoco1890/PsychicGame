var userGuesses = [];
var attemptsLeft = 10;

let wins = {
    score: 0,

    add: function() {
        this.score += 1;                                                                                    //increments score
        var el = document.getElementById('win');                                                            //grabs the win element
        el.innerText = this.score;                                                                          //changes win element text to score
        attemptsLeft = 10;                                                                                  //reset the attempts after a win
        document.getElementById('guesses-left').innerText = attemptsLeft;                                   //updates the guesses left on screen
        return this.score;                                                                                  //returns the score
    }

}
 
let loss = {
    score: 0,

    add: function(){
        this.score += 1;
        var el = document.getElementById('lose');
        el.innerText = this.score;
        attemptsLeft = 10;
        document.getElementById('guesses-left').innerText = attemptsLeft; 
        return this.score;
    }
}


// This function resets the game, and creates a character for the user to try to guess
function reset(){
  
    document.getElementById('u-guessed').innerText = "";
    document.getElementById('letter-guessed').innerText = "";
    var compKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var x = Math.floor((Math.random() * 26));
    var y = compKey[x];   
    return y;

}

//This function resets the user guesses array, and changes the text on the screen back to nothing
function clearLetters () {
    userGuesses = [];
    document.getElementById('letter-guessed').innerHTML = userGuesses;
}


//main


//testing attempts left variables
compLetter = reset();
console.log(compLetter);


document.onkeyup = function(event){

    //creates a variable to grab userinput, and updates the section that says You picked

    let userInput = event.key.toLowerCase();
    document.getElementById('u-guessed').innerText = "You picked: "
    document.getElementById('middleText').innerText = "Guess what letter I'm thinking of...";   //ensures that the You win text changes back to guess what letter 

    //only run this code when there are attempts left. 
    if (attemptsLeft > 0){

        attemptsLeft--;                                                                         //decrement attempts counter
        document.getElementById('guesses-left').innerText = attemptsLeft;                       //changes the text of attempts left
        userGuesses.push(userInput);                                                            //adds user choices into array
        document.getElementById('letter-guessed').innerHTML = userGuesses;                      //puts the array on the screen

        if (userInput === compLetter){

            document.getElementById('middleText').innerText = "Alright, let's play again!";
            document.getElementById('u-guessed').innerText = "Press any key to continue";
            wins.add();
            clearLetters();
        }
        

    }
    else {
        loss.add();
        document.getElementById('middleText').innerText = "Tough luck! let's play again!";
        document.getElementById('u-guessed').innerText = "Press any key to continue";
        clearLetters();
    }

    

   
   




}


// testing if add function works
// var el = wins.score;
// console.log(el);
// wins.add();
// var el2 = wins.score;
// console.log(el2);