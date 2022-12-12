function order(words){
const mat = words.split(" ").sort((a, b)=> a.replace(/[^1-9]/g, "") - b.replace(/[^1-9]/g, ""))



console.log(mat)
// const nums = ["1", "2", "3", "4", "5", "6", "7", "8"]
// const found = mat.find(e=> e.split("").includes("1"))
// console.log(found)
// const letters = words.replace(/[^1-9]/g, "").split("").sort()
// const newArr = []
// for(let i = 0; i < letters.length; i++){
//    if(mat[i].includes("1")){
//     newArr.push(mat[i])
//    } 
//    if(mat[i].includes("2")){
//     newArr.push(mat[i])
//    } 
//    if(mat[i].includes("3")){
//     newArr.push(mat[i])
//    } 
//    if(mat[i].includes("4")){
//     newArr.push(mat[i])
//    } 

// }
// console.log(newArr)
}

console.log(order("is2 Thi1s T4est 3a"))

function isTriangle(a,b,c){
    if(a <= b && a <= c ){
      return true
    }else{
  return false;
    }
     
  }

  console.log(isTriangle(2,2,2))