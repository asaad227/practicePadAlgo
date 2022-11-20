//arrayDiff([1,2,2,2,3],[2]) == [1,3]
function objFilter(a){
const newArr = a;
const obj = {}
newArr.forEach(e =>
    obj[e] = (obj[e] || 0) + 1
)
const answer =[] 
Object.entries(obj).forEach(e => e[1] === 1? answer.push(Number(e[0])): 0)


return answer;
}

console.log(objFilter([1,2,3,4,2,5,4]))