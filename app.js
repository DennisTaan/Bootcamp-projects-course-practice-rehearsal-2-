//games value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


    // UI elements
const game=document.querySelector("#game"),
      minNum=document.querySelector(".min-num"),
      maxNum=document.querySelector(".max-num"),
      guessBtn=document.querySelector("#guess-btn"),
      guessInput=document.querySelector("#guess-input"),
      message=document.querySelector(".message");

      //asign ui min and max
minNum.textContent=min;
maxNum.textContent=max;

//play again event list
game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener("click", function(){
  let guess=parseInt(guessInput.value);

  //validate input
  if(isNaN(guess)|| guess < min || guess >max){
    setMessaage( `please enter a number between ${min} and ${max}`,"green");
  }
  // check if won
  if(guess===winningNum){
    //game over - won
    gameOver(true,`${winningNum} is correct, YOU WIN!`)

  }else{
    // wrong number
    guessesLeft -= 1;

    if(guessesLeft===0){
      //game over lost
       //disable input
      gameOver(false,`game over , you lost the correct nummber was ${winningNum}!`);
    } else {
      // game continues - answer wrong
      // clear input
      guessInput.value="";
      guessInput.style.borderColor="red"
      // tell user its wrong number
      setMessaage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
    }
  }
})
    


// game over
function gameOver(won,msg){
  let color;
  won=== true ? color = "green" : color = "red";
  guessInput.disabled=true;
  //change border color
  guessInput.style.borderColor=color;
  message.style.color=color;
  //set message
  setMessaage(msg);

// play agian
guessBtn.value="play again"
guessBtn.className += "play-again"

}

// get winning number
function getRandomNum(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
  
}

// set message
function setMessaage(msg,color){
  message.style.color=color;
message.textContent=msg;
}