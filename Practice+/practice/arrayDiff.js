function arrayDiff(a,b){
return a.filter(item => !b.includes(item))
}

const a = [1,2,5]
const b = [1,3,6,2]

console.log(arrayDiff(a, b))
console.log(arrayDiff([1, 2, 2, 2, 3], [2]))