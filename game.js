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
   var x = prompt("Enter a year");
   var y =(x/100);
   var z =(Math.floor(y + 1));
    if (z ==12){
      alert("This year is in the" + " " + z + "th century");
    } else if (z == 13){
       alert("This year is in the" + " " + z + "th century");
    } else if (z == 11){
       alert("This year is in the" + " " + z + "th century");
    } else if (z % 10 == 1){
       alert("This year is in the" + " " + z + "st century");
    } else if (z % 10 == 2){
       alert("This year is in the" + " " + z + "nd century");
    } else if (z % 10 == 3){
       alert("This year is in the" + " " + z + "rd century");
    } else {
       alert("This year is in the" + " " + z + "th century");
    }
  }




function triangle(){
  var x = prompt("Enter an angle belonging to a triangle(Just the number)");
  var y = prompt("Enter the other angle of that same triangle(Just the number)");
  alert(180 - x - y + " " + " degree is the 3rdangle of the triangle");

}


function length(){
  var y = prompt("Insert anything you like and I will tell you the length") 
  alert(y.length);


}


function login(){
  var user = prompt("insert username");
  var loweruser = user.toLowerCase();
  var password = prompt("insert password");
  if(loweruser=="bobby"&& password =="green"){
    alert("Welcome My Child");
  }
  else{
    alert("try again");
  }
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




