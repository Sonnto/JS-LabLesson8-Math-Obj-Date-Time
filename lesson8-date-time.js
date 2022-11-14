//==LESSON 8 - JS DATE n TIME
let dateVar = new Date(); //creates new date value
console.log(dateVar);

//==METHODS OF THE DATE OBJECT
//TO GET PORTIONS OF THE TIMESTAMP (OR DATE/TIME VALUE)
myDate = dateVar.toDateString(); //converts date part to string
myDate = dateVar.toTimeString(); //converts time part to string
myDate = dateVar.getDate(); //returns day of the month
myDate = dateVar.getFullYear(); //returns 4 digit year
myDate = dateVar.getMonth(); //returns month (0-11)
myDate = dateVar.getDay(); //returns day of week (0-6)
myDate = dateVar.getHours(); //returns hours (0-23)
myDate = dateVar.getMinutes(); //returns minutes (0-59)
myDate = dateVar.getSeconds(); //returns seconds (0-59)
//NOTE = ALSO setDate, setMonth, setHours, etc...

myDate = dateVar.getTime(); //GETS NUMBER OF MILLISECONDS FROM JAN 1, 1970
//ALLOWS US TO DO MATHEMATICAL OPERATIONS WITH DATES

//OUTPUT DEMO TO CONSOLE
console.log(myDate);

//SETTING DATES
var thisNewYear = new Date("January 1, 2021 00:00:00"); //ASSIGN DATE

//OR BY 7 NUMBERS...
var thisNewYear = new Date(2021, 7, 22, 0, 0, 0);
//year, month, day, hour, minute, second, and millisecond

//YOU CAN ALSO SET DATES BY UTC:
var thisNewYear = new Date(1514782800000);

//HOW MANY DAYS UNTIL THE NEW YEAR?
let newYearInt = thisNewYear.getTime(); //CONVERT TO MILLISECONDS
let timeDif = newYearInt - myDate; //subtracts today from new year's
let daysTilNewYear = timeDif / 86400000; //divide by number of milliseconds in a day to get days
let fullDays = Math.floor(daysTillNewYear); //get rid of decimal days;
