
function removeTheMin(number){
  const minimum = Math.min(...number);
const result = number.filter(e => e > minimum);

return result;
}

console.log(removeTheMin([1,2,3,4,5]))