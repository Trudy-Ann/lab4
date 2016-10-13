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
    var wall1 = document.getElementById("boundary1");
     wall1.addEventListener("mouseover", function(){
     this.setAttribute("class", "boundary youlose");});
     
      var wall2 = document.querySelectorAll(".boundary");
     
    for (var i = 0; i < wall2.length; i++) {
        wall2[i].onmouseover = overBoundary;
    }



function overBoundary() {
    var boundary =  document.querySelectorAll (".boundary");
    for (var i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "#ff8888";
    }
}
}