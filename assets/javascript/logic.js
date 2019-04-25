

//Global Varibles 
//==================================================================================

//arrays 
let nameOptions = ["arthur" , "greg" , "polly" , "robin" , "colton" , "gerardo"];
let selectedNames = "";
let lettersInNames = [];
let numBlanks = 0;
let letterBlanksAndCorrectLetterGuesses = [];
let wrongLetters = [];

//Game Counters 
let winCount = 0;
let lossCount = 0; 
let guessesLeft = 9;

//Functions (reusable blocks of code that I can call on when needed)
//==================================================================================

function startGame() {
    selectedNames = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    lettersInNames = selectedNames.split('');
    numBlanks = lettersInNames.length;

    //game reset
    guessesLeft = 9;
    wrongLetters = [];
    letterBlanksAndCorrectLetterGuesses =[];

    //populate blanks and successes with right number of name blanks
    for (let i = 0; i < numBlanks; i++) {
        letterBlanksAndCorrectLetterGuesses.push('_');
    }

    //change HTML to reflect user game play
    document.getElementById('nameToGuess').innerHTML = letterBlanksAndCorrectLetterGuesses.join('  ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount; 
    //console logs
    console.log(selectedNames);
    console.log(lettersInNames);
    console.log(numBlanks);
    console.log(letterBlanksAndCorrectLetterGuesses);
}

function checkLetters(letter){

    //Is letter guessed in random name?
    let isLetterInRandomName = false;
    for (let i=0; i < numBlanks; i++){
        if(selectedNames[i] === letter) {
            isLetterInRandomName = true;
        }
        
    }

    //console logs
    console.log (checkLetters);

    //where does the letter exsist in the word?
      if(isLetterInRandomName) {
        for (let i=0; i < numBlanks; i++){
            if(selectedNames[i] === letter) {
                letterBlanksAndCorrectLetterGuesses[i] = letter;
            }
        }
      }
        //letter not found? 
      else{
          wrongLetters.push(letter);
          guessesLeft--; 
      }
      //console.logs
      console.log(letterBlanksAndCorrectLetterGuesses);
   
}
function roundComplete(){

    console.log('Win Count: ' + winCount + '| Loss Count: ' + lossCount + '| Guesses Left:' + guessesLeft);
  
  //Update HTML
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('nameToGuess').innerHTML = letterBlanksAndCorrectLetterGuesses.join(' ');
  document.getElementById('wrongGuesses').innerHTML = wrongLetters.join(' ');
   
    //check if user won 
if (lettersInNames.toString() === letterBlanksAndCorrectLetterGuesses.toString()) {
    winCount++;
    alert('YOU WON!');

    //update HTML
    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
}

  //check if user lost
 else if ( guessesLeft === 0) {
    lossCount++;
    alert('You lost!');
 
    //update HTML 
    document.getElementById('lossCounter').innerHTML = lossCount;

    startGame();
 }
   


}

//Main process or logic 
//==================================================================================

//starts and resets name game
startGame();

//register key-clicks
document.onkeyup = function(event) {
    let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    
    //console logs
    console.log(letterGuessed);
}