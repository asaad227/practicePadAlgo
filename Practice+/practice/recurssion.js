// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i] ;
//     }
//     return product;
//   }
// console.log(multiply([2,3,4, 5, 7, 8], 6))

/*

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
 */



function cc(card) {
    let count = [];
  // Only change code below this line
const re = [2,3,4,5,6];
const newArr = [7,8,9];
const lastC = [10, "A", "V", "k", 14]

for(let i = 0; i < card.length; i++){
  if(card.includes(lastC[i])){
    count.push(-1)
   }
   if(card.includes(re[i])){
    count.push(1)
   }

   if(card.includes(newArr[i])){
    count.push(0)
   }


}

return count.reduce((acc, curr)=> acc + curr, 0);
}

console.log(cc([10, "A", "V", "k", 2, 3, 4]))