var youlose = false;
var gameStart = false;

window.onload = function() {
   
    
    document.getElementById("start").addEventListener ('click', function() {
    youlose = false;    
    gameStart = true;
    
    var wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", function(){
    this.setAttribute("class", "boundary youlose");});
     
    var wall2 = document.querySelectorAll(".boundary");
        for (i = 0; i < wall2.length; i++) {
            wall2[i].setAttribute("class", "boundary");
            document.getElementById("status").innerHTML= "Move your mouse over the 'S' to begin."
            
      }
    
        for (var i = 0; i < wall2.length; i++) {
            wall2[i].onmouseover = overBoundary;
        }
        });

    var end = document.getElementById("end");
    end.addEventListener("mouseover",function(){
        if (youlose == false){  
            overEnd();
        }
    }); 
  


    function overBoundary() {
    youlose = true;
    var boundary =  document.querySelectorAll (".boundary");
        for (var i = 0; i < boundary.length; i++) {
            boundary[i].setAttribute("class", "boundary youlose");
    }
    overEnd (); stop();
    }

    document.getElementsByTagName("BODY")[0]. addEventListener('mouseover', function (event){
    var x = event.clientX;
    var y = event.clienty;
    var divLEFT = document.getElementById('maze').offsetLeft;
    var divTOP = document.getElementById('maze').offsetTop;
    var divHEIGHT = document.getElementById('maze').offsetHeight;
    var divWIDTH = document.getElementById('maze').offsetWidth;
    
        if (x < divLEFT || y < divTOP || y > (divTOP + mazeHEIGHT) ) {
            overBoundary();
            console.log ("hey")
    }
    
    });

    function startClick() {
    var boundary = document.getElementsByClassName("boundary");
        for (var i = 0;i<boundary.length - 1; i++) {
         boundary[i].setAttribute("class", "boundary")
          }
    document.getElementById("status").innerHTML= "Move your mouse over the 'S' to begin."
    }     

    function overEnd() {
        if(youlose) {
        document.getElementById('status').innerHTML = "Sorry, you lose, click S try again";
        gameStart = false;
    }   else if(youlose === false && gameStart) {
        document.getElementById('status').innerHTML = "Congratulations you win, Click S to try again";
        
    }

    }
}