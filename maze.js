/*window.onload= wallboundary;


 function wallboundary(){

    // $("boundary1").style.backgroundColor = "#ff8888";
   var wall = document.getElementById("boundary1");
   
   wall.addEventListener("mouseover", function(){
       this.setAttribute("class", "boundary youlose");
       
       
       document.querySelectorAll('.boundary');
       
   });
}*/
window.onload = function() {
    var yousuck = false;
    var wall1 = document.getElementById("boundary1");
     wall1.addEventListener("mouseover", function(){
     this.setAttribute("class", "boundary youlose");});
     
      var wall2 = document.querySelectorAll(".boundary");
     
    for (var i = 0; i < wall2.length; i++) {
        wall2[i].onmouseover = overBoundary;
    }



function overBoundary() {
    yousuck = true;
    alert('you lose!');
    var boundary =  document.querySelectorAll (".boundary");
    for (var i = 0; i < boundary.length; i++) {
        boundary[i].setAttribute("class", "boundary youlose");
    }
}

var mazeEnd = document.getElementById('end');
mazeEnd.addEventListener('mouseover',function(){
    if (yousuck == false){
    alert('You Win!');
    }
})

/*function overstart() {

    var start = document.getElementById("end");
    start.addEventListener("mouseover", function(){
     this.setAttribute("class", "end youlose");});
    for (var i = 0; i < start.length; i++) {
        start[i].removeClassName("youlose");
    }*/


/*function overEnd() {
    if(loser) {
        window.alert("Sorry, you lost. :[");
    } else {
        window.alert("You win! :]");
    }*/



}