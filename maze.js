window.onload= wallboundary;



 function wallboundary(){

    // $("boundary1").style.backgroundColor = "#ff8888";
   var wall = document.getElementById("boundary1");
  
   
   
   wall.addEventListener("mouseover", function(){
       this.setAttribute("class", "boundary youlose");
   });
}
