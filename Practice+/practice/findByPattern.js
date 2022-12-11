function findMatchedByPattern(pattern) {
//alphabet chracter position delared as a number
//if a it will be 1 so on 
// english alphabet is 26 letters 
// code from 64 to 91; 
var newArr = []

for(let i = 0; i < pattern.length; i++){
  var code = pattern.toUpperCase().charCodeAt(i);
code > 64 && code < 91? newArr.push(code = code - 64): code;
}
return newArr.join(" ");

//solution -2
/**
var letters = pattern.toUpperCase().replace(/[^A-Z]/g, '').split("").map(ch=> ch.charCodeAt(0) - 64).join(" ")
make whole to upper case then replace all empty space then split the letters map through
find the letter code and deducted 64 from the code to generate first alphabet number
as we know upper case code started from 65 up until 90
console.log(letters)
 */
  }

  console.log(findMatchedByPattern("I am here now"));