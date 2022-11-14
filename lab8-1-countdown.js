/* LAB 8-1 - FINAL COUNTDOWN!! */

//create page load listener
window.onload = countdown;
//create page load function
function countdown() {
  //create variables for required HTML elements
  let nowDateElement = document.getElementById("todayData");
  let deadlineElement = document.getElementById("finalData");
  let countdownDaysElement = document.getElementById("dueData");
  let dueDateMsgElement = document.getElementById("countMsg");
  //create variables for now date and due date
  let nowDate = new Date();
  // let nowDate = new Date("December 16, 2022 18:00:01");
  let dueDate = new Date("December 16, 2022 18:00:00");
  console.log(`Date now: ${nowDate}`);
  let dueDateInt = dueDate.getTime();
  console.log(`Due date in UTC: ${dueDateInt}`);
  //CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
  let daysLeftInt = dueDateInt - nowDate;
  console.log(`UTC time left until duedate?: ${daysLeftInt}`);
  //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
  let daysLeftTilDeadline = daysLeftInt / 86400000;
  let fullDaysLeft = Math.floor(daysLeftTilDeadline);
  console.log(`Full days left: ${fullDaysLeft}`);
  //OUTPUT NOW DATE & DUE DATE TO HTML PAGE
  nowDateElement.innerHTML = `${nowDate.toDateString()}.`;
  deadlineElement.innerHTML = `${dueDate.toDateString()}.`;
  countdownDaysElement.innerHTML = fullDaysLeft;
  //LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
  if (fullDaysLeft <= 0) {
    let lateMsg = "The Deadline for the Final Assignment has passed!";
    dueDateMsgElement.innerHTML = lateMsg;
  }
}
