function guess_number(){
  var secret = 35;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess a number between 1 and 100");
   
    if(guess == secret){
       alert("Good Job");
    }
    else if(guess < secret){
        alert("guess higher");        
    }
    else if(guess > secret){
      alert("guess lower");
    }
    else{
      alert("that's not a number")

	}
  }
}