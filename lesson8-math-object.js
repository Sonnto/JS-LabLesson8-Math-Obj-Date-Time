//=== LESSON 8 - MATH OBJECTS ===
let getPi = Maht.PI; //GETS PI

//=== METHODS OF MATH OBJECT ===
myNum = Math.sqrt(16); //Square Root
myNum = Math.sin(3); //Returns sine of number

//FREQUENTLY USED METHODS
myNum = Math.round(12.5); //round to nearest integer
myNum = Math.ceil(12.0001); //round to next highest integer
myNum = Math.floor(12.999); //round to next lowest integer
myNum = Math.max(7, 99); //Returns highest number  .min  returns lowest
nnumArray = [9, 4, 3, 10, 2, 6];
myNum = Math.max.apply(null, numArray); //If you want to use an array.

//GENERATING RANDOM NUMBERS
myNum = Math.random(); //gets random number 0 and 1: 0.791426395997405
myNum = Math.random() * 10; //multiply to give a range: 7.91426395997405
myNum = Math.floor(Math.random() * 10); // get rid of decimal: 7
myNum = Math.floor(Math.random() * 10) + 1; //gives whole number between 1 and 10

//SELECTING RANDOM NUMBER WITHIN RANGE - 2-6-SIDED DICE "RETURN" 2-12
// Returns random number between min (inclusive) and max (exlusive)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (min, max) + min);
}
getRandomArbitrary(2, 12); //for 2 6-sided dice
//OUTPUT DEMO NUMBER TO CONSOLE
console.log(myNum);
