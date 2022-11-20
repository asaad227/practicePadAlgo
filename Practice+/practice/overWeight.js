function overWeight(strng){

const newArr = strng.split(" ")
const newSub = [];
for(let i = 0; i <newArr.length; i++){
  newSub.push([newArr[i].split('').reduce((a, b)=> Number(a)+Number(b), 0), newArr[i]])
 
}

const sorted = newSub.sort((a, b)=> 
{ if(a[0]=== b[0]){
    return a[1].localeCompare(b[1])
}else{
    return a[0]- b[0]
}

}
)

console.log(sorted)

const res = sorted.map(e=> e[1])

return res.join(" ");
// console.log(res)
// console.log(newSub)
// newArr.forEach((e, i)=>{
//   obj[e] = newSub[i]
// })
// console.log(obj)
// const sorted = Object.keys(obj).sort((a, b)=> obj[a] - obj[b]);

// return sorted
}



const num = "2000 10003 1234000 44444444 9999 11 11 22 123"
//"100 180 90 56 65 74 68 86 99"
console.log(overWeight(num))