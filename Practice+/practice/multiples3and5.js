// function solution(number){
// const item = []
//     if(number < 0){
//         return 0
//     }
// const newArr = Array.from(Array(number).keys())
// console.log(newArr)
// for(let i = 1; i < newArr.length; i++){
//     if(newArr[i]% 3 === 0 || newArr[i]%5 === 0){
//         item.push(newArr[i])
//     }
// }
// const filtered = item.filter((e, i) => item.indexOf(e) === i );
// return filtered.reduce((a, b)=> a+ b, 0)

//   }

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i
      }
    }
    return sum;
  }

  console.log(solution(20))