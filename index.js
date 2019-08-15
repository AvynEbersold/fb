//jshint esversion: 9

//////////////////////////////////////////////////////////////////////////////

/* THIS SCRIPT IS FOR DEFAULT WEBSITE BEHAVIOR FOR MY GAMES. RUNNING THE GAME AND ALL OF ITS COMPONENTS
IS PROVIDED FOR IN GAME.JS.*/

//////////////////////////////////////////////////////////////////////////////

window.onload = function(){
  document.getElementById("js-warning").style.display = "none";

  //////////////////////////////////////////////////////////////////////////////

  function preventScrollOnSpace(e){
    if(e.keyCode == 32 && e.target == document.body) { //STOPS WEBSITE FROM SCROLLING DOWN WHEN SPACE IS PRESSED
      e.preventDefault();
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  document.addEventListener("keydown", preventScrollOnSpace);
};
