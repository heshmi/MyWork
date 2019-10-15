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

function o(){
  var x = 0;
  while (x <= 99){
    x = x + 1;
    if(x % 4 == 0 && x % 10 == 0){
      console.log("fourten");
    }else if(x % 10 == 0){
      console.log("ten");
    }else if(x % 4 == 0){
      console.log("four");
    }else{
      console.log(x);

    } 

  } 
}




function giveayear(){
   var year = prompt("Give me a year and I will give you a century");
   var century = year/100 + 1;
   console.log (century)
  prompt("that year is the " + Math.floor (century) + " century");





}


function triangle(){
  var x = prompt("Enter an angle belonging to a triangle(Just the number)");
  var y = prompt("Enter the other angle of that same triangle(Just the number)");
  alert(180 - x - y + " " + " degree is the 3rdangle of the triangle");

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




