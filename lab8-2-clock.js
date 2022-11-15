/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = goNow;
//create page load function
function goNow() {
  //create variables for required HTML elements
  hourElement = document.getElementById("hoursOut");
  minuteElement = document.getElementById("minsOut");
  secondElement = document.getElementById("secsOut");
  startBtnElement = document.getElementById("btnStart");
  stopBtnElement = document.getElementById("btnStop");
  //create time variable so all functions have access to it
  let timedFunction;
  //CREATE FUNCTION THAT DISPLAYS THE TIME
  function displayTime() {
    let timeNow = new Date();
    hourElement.innerHTML = `${timeNow.getHours()}:`;
    minuteElement.innerHTML = `${timeNow.getMinutes()}:`;
    secondElement.innerHTML = timeNow.getSeconds();
    console.log("count");

    if (timeNow.getHours() < 10) {
      hoursElement.innerHTML = `0${timeNow.getHours()}:`;
    }

    if (timeNow.getMinutes() < 10) {
      minuteElement.innerHTML = `0${timeNow.getMinutes()}:`;
    }

    if (timeNow.getSeconds() < 10) {
      secondElement.innerHTML = `0${timeNow.getSeconds()}`;
    }
  }
  //CREATE FUNCTION TO START THE CLOCK.
  function startClock() {
    timedFunction = setInterval(displayTime, 1000);
  }
  //CREATE FUNCTION TO STOP THE CLOCK
  function stopClock() {
    clearInterval(timedFunction);
  }
  // SET EVENT LISTENERS
  startBtnElement.onclick = startClock;
  stopBtnElement.onclick = stopClock;
}
