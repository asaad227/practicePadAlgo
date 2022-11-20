
// // function filter_list(l) {
// // //     // Return a new array with the strings filtered out
    
// // //    const newArr = [];
  
// // //     for(let i = 0; i < l.length; i++){
// // //       if(typeof(l[i]) === "string"){
// // //         console.log(l[i])
// // //         newArr.push(l[i])
// // //       }
// // //     }
// // //     console.log("I am here", newArr)
// // //     return Number(newArr);


// // const filtered = l.filter(e => e.includes(2));

// // console.log(filtered)
// //   }

// //   filter_list([1,2, "a", "b"])

// const limit = [1,2, "a", "b"]
// console.log(limit.includes("a"))

// const nums = [2,5,6, "b"]

// const filtered = limit.filter(e=> nums.includes(e));

// console.log(filtered)


// function oddSum(n){ 
// let sum = n ** 3;
// return sum;
// }

// console.log(oddSum(42))


// function isIsogram(str){
//     const numArray = str.toLowerCase().split("")
//     const newSet = new Set(numArray);
//     const nam = Array.from(newSet);
//   console.log(nam.length, numArray.length)
//   if(numArray.length !== nam.length){
//     return false;
//   }else{
//     return true;
//   }


//   }

//   console.log(isIsogram("madeash"))

// function product(dna){
//     const newArr = dna.split("");
//     const newDna = [];
//    for(let i = 0; i < newArr.length; i++){
//   newArr[i] === "A"? newDna.push("T"):newArr[i] && newArr[i] === "G"? newDna.push("C"):newArr[i] &&  newArr[i] === "T"? newDna.push("A"):newArr[i] && newArr[i] === "C"? newDna.push("G"):newArr[i]
//    }

//     console.log(newDna)
// }

// console.log(product("ATTGA"))


// function maskify(cc) {
// // split the string and store in variable 
// // if string length more then and equal to 4 we gonna slice -4 and push it to variable;
// // const newArr = cc.split("");
// // const nums = []
// // for(let i = 0; i < newArr.length - 4; i++){
// //     nums.push("#")
// // }

// // const last = newArr.slice(-4);

// // return nums.join("") + last.join("");

//  const nums = cc.split("");
//  const newArr = nums.slice(0, -4);
// const nim = newArr.join("").replace(/./g, "#");

// console.log(nim)
// }

// console.log(maskify("456457964456"))

// function persistence(num) {
//     let result = num.toString().split("");
    
// let count = 0;
  

//    while(result.length !== 1) {
//     result = result.reduce((a, b)=> a * b).toString().split("");
//    count ++
//    }
  
// return count;
//  }

//  console.log( persistence(999))

// function findOdd(A) {
//     //happy coding!
//   const filtered = A.filter(e => A.includes(e));

//   console.log(filtered)
//   }


//   console.log(findOdd([2,3,1,1,3,3,3,1]))

// function reminder(num, nim){
//     const x = new Date(num);
//     const y = new Date(nim)

//     console.log(x, y)
// }
// const current = new Date();
// const future = new Date(2022, 10, 01);
// console.log(reminder(current, future))


const newArr = [1,1,2,-2,5,2,4,4,-1,-2,5]

function sorting(A){
   let nim = {};  
  A.forEach(e => {
    nim[e] = (nim[e] || 0) + 1
  });

const sorted = Object.keys(nim).filter(e => nim[e]%2 !== 0);
return sorted;
// const newArr = [];
// const objV = Object.values(nim);

// for(let i = 0; i < objV.length; i++){
//     if(objV[i]%2 !== 0){
//         newArr.push(objV[i])
//     }
// }

// const found = Object.keys(nim).find(e => nim[e] === newArr[0]);

// return found;

 
}

console.log(sorting(newArr))