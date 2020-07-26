const input= document.querySelector("#input");
const submit= document.querySelector("#submit")
const hint= document.querySelector("#hint");
const result = document.querySelector(".result");
const p= document.querySelector("p");
 let guess=3;//-->So that there will be three chances to try it.
 let number = Math.floor(Math.random()*10 +1);
submit.addEventListener('click', Game); 
//This is the Game function. 
function Game(){ guess--;
 if(input.value=="" && !input.disabled || isNaN(input.value)) {
  alert("Please Enter a number");
  input.value="";
} else if(submit.value=="Play Again" || submit.value=="Try Again") {
  playAgain();
  } else if(number==input.value) { 
  Won();                           //If  you win
  } else if(guess==0){         
  lost();                         //If you lose
 } 
  else { input.style.borderColor="Red";
  p.textContent=`Guess is Wrong, You have ${guess} guess left`; 
  p.style.color="orange"; input.value=""; 
  }
}
// This is the function when you have won
  function Won(){
  input.style.borderColor="rgb(18, 212, 0)";
  p.textContent="Congragulations. You guessed it Right";
  p.style.color="blue"; 
  submit.value="Play Again"; 
  input.disabled= true;
  input.value="";
} 
// This is the function for having three chances
  function playAgain() {
  guess=3;
  p.textContent="";
  input.disabled= false;
  hint.disabled= false;
  number = Math.floor(Math.random()*10 +1);
  submit.value="Submit";
  console.log(number,guess);
} 
// This the function when you have lost 
  function lost() {
 p.textContent=`You Lost, Play Again`; 
  input.style.borderColor="Red";
  p.style.color="Red";
  input.disabled= true;
  submit.value="Try Again";
  hint.disabled= true; 
  input.value=""; 
}
// This is for the hint
hint.addEventListener('click', throwHint);
  function throwHint(e){ 
  e.preventDefault(); 
  if(input.value=="" || isNaN(input.value)) { 
  input.value="";
  alert("Please enter a number");
}
 else if(number>input.value){ 
 p.innerText=`The entered number is low, Go for High`;
 p.style.color="yellow";
 input.value=""; 
}
 else if(number<input.value){
  p.innerText=`The entered number is high, Go for low`; 
  p.style.color="yellow";
  input.value="";
}
else{
  p.innerText=`Is ${input.value}, your lucky number?? Give it a try :)`;
} 
} 
