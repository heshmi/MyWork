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
      alert("Are you ok")

	 }
  }
}

function test(){
  alert("Hello");
  console.log("Hi");


}


function giveayear(){
   var year = prompt("Give me a year and I will give you a century");
   var century = year/100 + 1;
   console.log (century)
  prompt("that year is the " + Math.floor (century) + " century");





}


function test2(){
  alert("Are");
  console.log("Hi");


}


function test3(){
  alert("A");
  console.log("Hi");


}


function test4(){
  alert("Human");
  console.log("Hi");


}


function test5(){
  alert("That");
  console.log("Hi");


}



function test6(){
  alert("Likes");
  console.log("Hi");


}



function test7(){
  alert("To");
  console.log("Hi");


}



function test8(){
  alert("Look");
  console.log("Hi");


}




function test9(){
  alert("Like");
  console.log("Hi");


}



function test10(){
  alert("Humans");
  console.log("Hi");


}




