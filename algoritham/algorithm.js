let arrayOdds = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41,
  43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79,
  81, 83, 85, 89, 91, 93, 95, 97, 99,
];
let array1 = [1, 3, 8, 6, 9];
let arrayEven = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
  80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
];

function bSearch(list, item){
  let low = 0;
  let high = list.length - 1;
console.log('i am upper class', low, high)
  while(low <= high){
    let mid = Math.floor((low + high) /2);
    console.log('i am mid', mid, low, high)
    if(list[mid] === item){
      //this is the point looping will stop when low, mid and high become equal 
      return mid
    }

    if(item < list[mid]){
      //continues checking item with mid point if this condition meet it will do the below some
       high = mid - 1;
       console.log('i am high', high)
    }else{
      //if above condition doesnt meet it will do the below sum
        low = mid + 1;
        console.log('i am low', low)
    }
  }
//if item value outside the array range it will return -1
  return -1;
}

console.log(bSearch(arrayEven, 101))


// function array(e){
//   return e.filter(e=> e%2 !== 0)
  
// }

// console.log(array(array1));

// function mapItem(params) {
//   return params.map(e=> e + `I am here to learn staff`);
// }

// function forLoop(params) {
// for (let i = 0;i<params.length ; i++) {
//  if(params[i]%2 === 0){
//  return params[i];
//  }
  
// }  

// }



// console.log(mapItem(array1));
// console.log(forLoop(array1));