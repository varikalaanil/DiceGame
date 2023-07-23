//console.log(document.querySelector("h1").classList.add("huge"));
 
 //document.querySelector("h1").innerHTML = "<i>iam jenny</i>";
  
  //document.querySelector("a").setAttribute("href","https://www.Anil.com");

 
 

 var player1Score = Math.floor(Math.random() * 6) + 1;
  
 document.getElementById("one").setAttribute("src", "dice" + player1Score + ".png");
    
 var player2Score = Math.floor(Math.random() * 6) + 1;
   
 document.getElementById("two").setAttribute("src", "dice" + player2Score + ".png");
   
  if(player1Score > player2Score)
  document.querySelector("h1").innerHTML = "WINNER IS PLAYER 1"
   
  else if(player1Score === player2Score)
  document.querySelector("h1").innerHTML = "MATCH DRAWN"

  else
  document.querySelector("h1").innerHTML = "WINNER IS PLAYER 2"

  
