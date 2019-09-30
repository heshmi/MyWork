function guess_number(){
  var secret = 60;
  var guess;
  while(guess != secret){ 
    guess = prompt("Four to the power of 3 minus 4");
   
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

