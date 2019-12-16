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
  var x = (y.trim())
  alert(x.length);


}


function login(){
  var user = prompt("insert username");
  var loweruser = user.toLowerCase();
  var password = prompt("insert password");
  if(loweruser=="bobby" && password =="green"){
    alert("Welcome My Child");
  }
  else{
    alert("try again");
  }
}




function pigIt(){
var a = str.split(" ")
var x = ""
for(let i = 0;i< a.length;i++){
x += a[i].slice(1)+ a[i][0] +"ay "

}
return x.trim("")


                                    
  



}


function Encrypt(){
  var str = prompt("Enter plain text")
var a = str.split("")
var x = ""
var y ="a1dgh0klqwe6tyuioopmnbvz"
var z = "asdfghyukiolkhgfdsa"
for(let i = 0;i< a.length;i++){
  for(let g= 0;g< a[i].length;g++)
x += a[i][g]+y[g]+z[g+2]
}
var sipher = (x.trim("").toLowerCase())
 document.getElementById("encryptedContent").innerHTML = sipher;
}




function Decrypt(){
  var sipher = prompt("Enter sipher text")
var z = ""
for(let i = 0;i< sipher.length;i+= 3){
z += sipher[i] +" "
}
var plain = (z.trim("").toLowerCase())
 document.getElementById("decryptedContent").innerHTML = plain;


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




