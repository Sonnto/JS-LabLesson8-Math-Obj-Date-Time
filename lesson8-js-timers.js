//=== LESSON 8 - JAVASCRIPT TIMERS ===
//JAVASCRIPT HAS TWO TIMER FUNCTIONS WE CAN USE IN CODE
window.onload = gonow;

function gonow() {
  let btn = document.getElementById("subBtn"); //GET BUTTON
  function sendMsg() {
    alert("Hey ho, 5 seconds have passded.");
  }

  /* setTimeout EXECUTES A SET FUNCTION AFTER THE SET AMOUNT OF TIME, LIKE A COUNTDOWN CLOCK.
  THE TIMER STARTS WHEN VARIABLE IS ASSIGNED TO THE METHOD*/
  function showInterval() {
    console.log("Three seconds have gone by...");
  }

  let tickTock = setInterval(showInterval, 3000);

  //JAVASCRIPT ALSO PROVIDES METHODS TO STOP THE TIMERS BY CLEARING THE VARIABLES
  //clearTimeout CANCELS setTimeout & clearInterval CANCELS setInterval
  //LET'S PUT THEM INSIDE A FUNCTION & CALL IT WHEN THE BUTTON IS CLICKED...
  function cancelTimers() {
    clearTimeout(timedFunction); //PASS IN VARIABLE NAME
    clearInterval(tickTock);
    alert("Timer stopped");
  }
  btn.onclick = cancelTimers; //SET UP LISTENER
} //end onload function

/* BEWARE OF THE "GOTCHA" FOR TIMERS...THE TRICK IS THEY START AS SOON AS THEY ARE ASSIGNED TO A VARIABLE. SO IF YOU DON'T WANT THE TIMER TO START RIGHT AWAY, YOU NEED TO PUT IT INSIDE A FUNCTION, THEN CALL THE FUNCTION WHEN YOU WANT THE TIMER TO START. */
let instantTimer = setTimeout(doThis, 10000);
//THE ABOVE WILL HAPPEN ABOUT 10 SECONDS AFTER THE PAGE LOADS.
let waitTimer; //DECLARE THE variable HERE IN CASE YOU WANT TO USE IT OUTSIDE OF THE FUNCTION.
function startTimer() {
  waitTimer = setTimeout(doThis, 10000);
}
//THIS TIMER WON'T START UNTIL THIS FUNCTION IS CALLED.
